<template>
<div class="container home">
	<div
		v-if="active.episode !== false"
		class="feature"
		:style="
			episodeReleased(active.series, active.episode)
			? 'background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(/img/thumbs/' + active.series + '_' + String(active.episode).padStart(2, '0') + '.jpg)'
			: 'background: transparent'
		"
	>
		<div class="thumb" v-if="!active.play">
			<img
				class="c-hand"
				v-if="episodeReleased(active.series, active.episode)" :src="'/img/thumbs/' + active.series + '_' + String(active.episode).padStart(2, '0') + '.jpg'"
				:alt="database[active.series].episodes[active.episode].title"
				@click="active.play = true"
			/>
			<img
				v-else
				src="@/assets/coming-soon-640x360.png"
				alt="Coming Soon..."
			/>
		</div>
		<iframe
			v-else
			:src="'https://www.youtube-nocookie.com/embed/' + database[active.series].episodes[active.episode].youtube"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
		<div class="description">
			<span v-if="seriesReleased(active.series)">
				<span v-if="episodeReleased(active.series, active.episode)">
					<span class="title">
						{{ database[active.series].episodes[active.episode].title }}
					</span>
					<span class="duration text-unimportant ml-1">
						⏲ {{ database[active.series].episodes[active.episode].duration }}
					</span>
				</span>
				<span v-else>
					Episode verfügbar am {{ humanDate(database[active.series].episodes[active.episode].release) }}
				</span>
			</span>
			<span v-else>
				Neuer Titel verfügbar am {{ humanDate(database[active.series].episodes[active.episode].release) }}
			</span>
			<template v-if="seriesReleased(active.series) && database[active.series].episodes[active.episode].hasOwnProperty('tags')">
				<span
					class="tag ml-2"
					v-for="(tag, t) in database[active.series].episodes[active.episode].tags" :key="t"
				>
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
			v-for="(series, s, i) in database"
			:key="s"
			:index="i"
			class="element"
			:class="{ active: active.series == s }"
			:data-duration="seriesReleased(s) ? seriesDuration(s) : '?'"
		>
			<img
				v-if="seriesReleased(s)"
				:src="'/img/thumbs/' + s + '_01.jpg'"
				:alt="series.episodes[1].title"
				@click="active.series = s; active.episode = 1; active.play = false"
			/>
			<img
				v-else
				src="@/assets/unknown-320x180.jpg"
				alt="Currently not available"
				@click="active.series = s; active.episode = 1; active.play = false"
			/>
		</div>
	</div>
	<!-- list all episodes of selected series -->
	<h2 class="center-sm" v-if="active.series !== false && seriesReleased(active.series)">
		<span>{{ releasedEpisodesCount }} Episode{{ releasedEpisodesCount == 1 ? '' : 'n' }} in {{ database[active.series].title }}</span>
		<span class="block-sm text-unimportant ml-1">{{ database[active.series].subtitle }}</span>
	</h2>
	<template v-if="database[active.series] && episodesCount > 1 && seriesReleased(active.series)">
		<div class="list episodes">
			<div
				v-for="(episode, e, i) in database[active.series].episodes"
				:key="i"
				:index="i"
				class="element"
				:class="{ active: active.episode == e }"
				:data-duration="episodeReleased(active.series, e) ? episode.duration : '?'"
			>
				<img
					v-if="episodeReleased(active.series, e)" :src="'/img/thumbs/' + active.series + '_' + String(e).padStart(2, '0') + '.jpg'"
					:alt="episode.title"
					@click="active.episode = e; active.play = false"
				/>
				<img v-else
					src="@/assets/unknown-320x180.jpg"
					alt="Currently not available"
					@click="active.episode = e; active.play = false"
				/>
			</div>
		</div>
	</template>
</div>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import { reactive, computed } from 'vue';
import database from '@/data/data.json';
import Logo from '@/components/Logo.vue';

// set page meta data
useMeta({
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
</script>
