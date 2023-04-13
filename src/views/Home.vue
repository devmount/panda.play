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
	<h2 class="center-sm">{{ seriesCount }} Titel</h2>
	<hooper class="series" :settings="sliderSettings.series" ref="series">
		<slide
			v-for="(series, s, i) in database"
			:key="s"
			:index="i"
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
		</slide>
		<hooper-navigation slot="hooper-addons"></hooper-navigation>
	</hooper>
	<h2 class="center-sm" v-if="active.series !== false && seriesReleased(active.series)">
		<span>{{ releasedEpisodesCount }} Episode{{ releasedEpisodesCount == 1 ? '' : 'n' }} in {{ database[active.series].title }}</span>
		<span class="block-sm text-unimportant ml-1">{{ database[active.series].subtitle }}</span>
		<span class="c-hand" v-if="episodesCount > 1" @click="slideToLastEpisode()" title="Zur letzten Folge springen">⏭</span>
	</h2>
	<template v-if="active.series == s && episodesCount > 1 && seriesReleased(active.series)">
		<hooper
			v-for="(series, s) in database"
			class="episodes"
			:key="s"
			:settings="sliderSettings.episodes"
			:ref="s"
		>
			<slide
				v-for="(episode, e, i) in series.episodes"
				:key="i"
				:index="i"
				:class="{ active: active.episode == e }"
				:data-duration="episodeReleased(s, e) ? episode.duration : '?'"
			>
				<img
					v-if="episodeReleased(s, e)" :src="'/img/thumbs/' + s + '_' + String(e).padStart(2, '0') + '.jpg'"
					:alt="episode.title"
					@click="active.episode = e; active.play = false"
				/>
				<img v-else
					src="@/assets/unknown-320x180.jpg"
					alt="Currently not available"
					@click="active.series = s; active.episode = e; active.play = false"
					/>
				</slide>
			<hooper-navigation slot="hooper-addons"></hooper-navigation>
		</hooper>
	</template>
</div>
</template>

<script>
// get data
import Data from '@/data/data.json';
// internal components
import Logo from '@/components/Logo.vue';
// slider component
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper-vue3';
import 'hooper-vue3/dist/hooper.css';

export default {
	name: 'home',
	metaInfo: {
		title: 'Let\'s Plays'
	},
	components: {
		Logo,
		Hooper,
		Slide,
		HooperNavigation
	},
	data () {
		return {
			now: new Date(),
			database: Data,
			sliderSettings: {
				series: {
					trimWhiteSpace: true,
					itemsToShow: 1.8,
					itemsToSlide: 1,
					centerMode: true,
					breakpoints: {
						640: {
							itemsToShow: 2.78,
							itemsToSlide: 2,
							centerMode: false
						},
						960: {
							itemsToShow: 4.18,
							itemsToSlide: 4,
							centerMode: false
						},
						1280: {
							itemsToShow: 5.57,
							itemsToSlide: 5,
							centerMode: false
						}
					}
				},
				episodes: {
					trimWhiteSpace: true,
					itemsToShow: 2.5,
					itemsToSlide: 2,
					centerMode: true,
					breakpoints: {
						640: {
							itemsToShow: 3.76,
							itemsToSlide: 3,
							centerMode: false
						},
						960: {
							itemsToShow: 5.64,
							itemsToSlide: 5,
							centerMode: false
						},
						1280: {
							itemsToShow: 7.53,
							itemsToSlide: 7,
							centerMode: false
						}
					}
				}
			},
			active: {
				series: false,
				episode: false,
				play: false
			}
		}
	},
	methods: {
		// return wether a series first episode is released or not
		seriesReleased (skey) {
			return this.episodeReleased(skey, 1)
		},
		// return wether an episode of a given series is released or not
		episodeReleased (skey, ekey) {
			return this.now > new Date(this.database[skey].episodes[ekey].release)
		},
		// return total duration of released episodes in the given series and format as H:MM:SS
		seriesDuration (skey) {
			let seconds = Object.values(this.database[skey].episodes).reduce(function (t, c) {
				let [m, s] = c.duration.split(':')
				return t + (60 * Number(m)) + Number(s)
			}, 0)
			let hours = Math.floor(seconds / 3600)
			seconds %= 3600
			let minutes = Math.floor(seconds / 60)
			seconds = seconds % 60
			return hours + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
		},
		// return human readable date in German
		humanDate (t) {
			var event = new Date(t)
			var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
			return event.toLocaleDateString('de-DE', options) + ' um ' + event.toLocaleTimeString('de-DE').slice(0, 5) + ' Uhr'
		},
		// slide the active series to the last published episode
		slideToLastEpisode () {
			if (this.$refs[this.active.series]) {
				this.$refs[this.active.series][0].slideTo(this.releasedEpisodesCount - 1)
			}
		}
	},
	computed: {
		// calculate number of series
		seriesCount () {
			return Object.keys(this.database).length
		},
		// calculate number of episodes in the active series
		episodesCount () {
			return Object.keys(this.database[this.active.series].episodes).length
		},
		// calculate number of released episodes in the active series
		releasedEpisodesCount () {
			return Object.keys(Object.filter(this.database[this.active.series].episodes, e => this.now > new Date(e.release))).length
		}
	}
}
</script>
