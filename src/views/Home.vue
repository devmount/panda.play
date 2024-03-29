<template>
<div class="container home">
	<div
		v-if="active.episode !== false"
		class="feature"
		:style="
			episodeReleased(active.series, active.episode)
			? `background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${thumbSrc})`
			: 'background: transparent'
		"
	>
		<div v-if="!active.play" class="thumb">
			<img
				class="c-hand"
				v-if="episodeReleased(active.series, active.episode)"
				:src="thumbSrc"
				:alt="selectedEpisode.title"
				@click="active.play = true"
			/>
			<img v-else src="@/assets/coming-soon-640x360.png" alt="Coming Soon..." />
		</div>
		<iframe
			v-else
			:src="`https://www.youtube-nocookie.com/embed/${selectedEpisode.youtube}`"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
		<div class="description">
			<span v-if="seriesReleased(active.series)">
				<span v-if="episodeReleased(active.series, active.episode)">
					<span class="title">
						{{ selectedEpisode.title }}
					</span>
					<span class="duration text-unimportant ml-1">
						⏲ {{ selectedEpisode.duration }}
					</span>
				</span>
				<span v-else>
					Episode verfügbar am {{ humanDate(selectedEpisode.release) }}
				</span>
			</span>
			<span v-else>
				Neuer Titel verfügbar am {{ humanDate(selectedEpisode.release) }}
			</span>
			<template v-if="seriesReleased(active.series) && selectedEpisode.hasOwnProperty('tags')">
				<span class="tag ml-2" v-for="(tag, t) in selectedEpisode.tags" :key="t">
					{{ tag }}
				</span>
			</template>
		</div>
	</div>
	<div v-else class="feature">
		<span>
			<Logo />
			<span class="hide-sm">Wähle einen Titel ⬇</span>
		</span>
	</div>
	<!-- list all series -->
	<h2 class="center-sm">{{ seriesCount }} Titel</h2>
	<div class="list series">
		<div
			v-for="(series, s) in database"
			:key="s"
			class="element"
			:class="{ active: active.series == s }"
			:data-duration="seriesReleased(s) ? seriesDuration(s) : '?'"
		>
			<img
				v-if="seriesReleased(s)"
				:src="`/img/thumbs/${s}_01.jpg`"
				:alt="series.episodes[1].title"
				@click="selectSeries(s)"
			/>
			<img
				v-else
				src="@/assets/unknown-320x180.jpg"
				alt="Currently not available"
				@click="selectSeries(s)"
			/>
		</div>
	</div>
	<!-- list all episodes of selected series -->
	<h2 v-if="active.series !== false && seriesReleased(active.series)" class="center-sm">
		<span>
			{{ releasedEpisodesCount }} Episode{{ releasedEpisodesCount == 1 ? '' : 'n' }}
			in {{ database[active.series].title }}
		</span>
		<span class="block-sm text-unimportant ml-1">{{ database[active.series].subtitle }}</span>
	</h2>
	<template v-if="database[active.series] && episodesCount > 1 && seriesReleased(active.series)">
		<div class="grid episodes">
			<div
				v-for="(episode, e, i) in database[active.series].episodes"
				:key="i"
				:index="i"
				class="element"
				:class="{ active: active.episode == e }"
				:data-duration="episodeReleased(active.series, e) ? episode.duration : '?'"
			>
				<img
					v-if="episodeReleased(active.series, e)"
					:src="`/img/thumbs/${active.series}_${String(e).padStart(2, '0')}.jpg`"
					:alt="episode.title"
					@click="selectEpisode(e)"
				/>
				<img v-else
					src="@/assets/unknown-320x180.jpg"
					alt="Currently not available"
					@click="selectEpisode(e)"
				/>
			</div>
		</div>
	</template>
	<div
		v-if="active.series !== false && seriesReleased(active.series)"
		v-html="seriesDescription"
		class="mt-3 text-unimportant"
	></div>
</div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useSeoMeta } from 'unhead';
import database from '@/data/data.json';
import Logo from '@/components/Logo.vue';

// set page meta data
useSeoMeta({
	title: 'Übersicht',
});

const now = new Date();
const active = reactive({
	series: false,
	episode: false,
	play: false
});

// return wether a series first episode is released or not
const seriesReleased = (skey) => episodeReleased(skey, 1);
// return wether an episode of a given series is released or not
const episodeReleased = (skey, ekey) => {
	return now > new Date(database[skey].episodes[ekey].release);
};
// return total duration of released episodes in the given series and format as H:MM:SS
const seriesDuration = (skey) => {
	let seconds = Object.values(database[skey].episodes).reduce(function (t, c) {
		let [m, s] = c.duration.split(':');
		return t + (60 * Number(m)) + Number(s);
	}, 0);
	const hours = Math.floor(seconds / 3600);
	seconds %= 3600;
	const minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;
	return hours + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
};
// return human readable date in German
const humanDate = (t) => {
	var event = new Date(t);
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	return event.toLocaleDateString('de-DE', options) + ' um ' + event.toLocaleTimeString('de-DE').slice(0, 5) + ' Uhr';
};

// calculate number of series
const seriesCount = computed(() => {
	return Object.keys(database).length;
});
// calculate number of episodes in the active series
const episodesCount = computed(() => {
	return Object.keys(database[active.series].episodes).length;
});
// calculate number of released episodes in the active series
const releasedEpisodesCount = computed(() => {
	return Object.keys(Object.filter(database[active.series].episodes, e => now > new Date(e.release))).length;
});

// currently active / selected episode
const selectedEpisode = computed(() => database[active.series]?.episodes[active.episode]);
// generate thumbnail path of selected episode
const thumbSrc = computed(() => `/img/thumbs/${active.series}_${String(active.episode).padStart(2, '0')}.jpg`);
// preprocess description of selected series
const linkReplacer = (matched) => {
  const url = matched.startsWith("https") ? matched : `https://${matched}`;
  return `<a href="${url}" target="_blank">${matched}</a>`
}
const seriesDescription = computed(() => {
	const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
	return database[active.series].description.replaceAll(linkRegex, linkReplacer).replaceAll("\n", '<br>');
});

// click events
const selectSeries = (series) => {
	active.series = series;
	active.episode = 1;
	active.play = false;
}
const selectEpisode = (episode) => {
	active.episode = episode;
	active.play = false;
}
</script>
