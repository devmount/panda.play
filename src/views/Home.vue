<template lang="pug">
div.container.home
  //- show selection
  div.feature(v-if='active.episode !== false' :style='episodeReleased(active.series, active.episode) ? "background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(http://i3.ytimg.com/vi/" + database[active.series].episodes[active.episode].youtube + "/maxresdefault.jpg)" : "background: transparent"')
    div.thumb(v-if='!active.play')
      img.c-hand(v-if='episodeReleased(active.series, active.episode)' :src="'http://i3.ytimg.com/vi/' + database[active.series].episodes[active.episode].youtube + '/maxresdefault.jpg'" @click='active.play = true')
      img(v-else src="@/assets/coming-soon-640x360.png")
    iframe(v-else width='640' height='360' :src="'https://www.youtube.com/embed/' + database[active.series].episodes[active.episode].youtube" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen).
    div.description
      span(v-if='seriesReleased(active.series)')
        span(v-if='episodeReleased(active.series, active.episode)') {{ database[active.series].episodes[active.episode].title }}
        span(v-else) Episode verfügbar am {{ humanDate(database[active.series].episodes[active.episode].release) }}
      span(v-else) Neuer Titel verfügbar am {{ humanDate(database[active.series].episodes[active.episode].release) }}
      span.tag.ml-2(v-if='seriesReleased(active.series) && database[active.series].episodes[active.episode].hasOwnProperty("tags")' v-for='(tag, t) in database[active.series].episodes[active.episode].tags' :key='t')
        | {{ tag }}
  //- show default feature
  div.feature(v-else)
    span
      //- logo svg
      Logo
      | Wähle einen Titel
      i.icon.ion-md-arrow-down.ml-1
  //- show list of all series
  h2 {{ seriesCount }} Titel
  hooper.series(:settings='sliderSettings.series' ref='series')
    slide(v-for='(series, s, i) in database' :key='s' :index='i' :class='{ active: active.series == s }')
      img(v-if='seriesReleased(s)' :src="'http://i3.ytimg.com/vi/' + series.episodes[1].youtube + '/mqdefault.jpg'" @click='active.series = s; active.episode = 1; active.play = false')
      img(v-else src="@/assets/unknown-320x180.jpg" @click='active.series = s; active.episode = 1; active.play = false')
    hooper-navigation(slot='hooper-addons')
  //- show episode list of current series
  h2(v-if='active.series !== false && seriesReleased(active.series)')
    span {{ releasedEpisodeCount }} Episode{{ releasedEpisodeCount == 1 ? '' : 'n' }} in {{ database[active.series].title }}
    span.text-unimportant.ml-1 {{ database[active.series].subtitle }}
  hooper.episodes(v-if='active.series == s && episodeCount > 1 && seriesReleased(active.series)' v-for='(series, s) in database' :key='s' :settings='sliderSettings.episodes' :ref='s')
    slide(v-for='(episode, e, i) in series.episodes' :key='i' :index='i' :class='{ active: active.episode == e }')
      img(v-if='episodeReleased(s, e)' :src="'http://i3.ytimg.com/vi/' + episode.youtube + '/mqdefault.jpg'" @click='active.episode = e; active.play = false')
      img(v-else src="@/assets/unknown-320x180.jpg" @click='active.series = s; active.episode = e; active.play = false')
    hooper-navigation(slot='hooper-addons')
  //- div(v-if='active.series !== false' class='text-unimportant text-small mt-2')
  //-   span(v-for='line in database[active.series].description.split("\\n")')
  //-     | {{ line }}
  //-     br.
</template>

<script>
// get data
import Data from '@/data/data.json'
// internal components
import Logo from '@/components/Logo.vue'
// slider component
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'home',
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
          itemsToShow: 2.78,
          itemsToSlide: 2,
          breakpoints: {
            960: {
              itemsToShow: 4.18,
              itemsToSlide: 4
            },
            1280: {
              itemsToShow: 5.57,
              itemsToSlide: 5
            }
          }
        },
        episodes: {
          trimWhiteSpace: true,
          itemsToShow: 3.76,
          itemsToSlide: 3,
          breakpoints: {
            960: {
              itemsToShow: 5.64,
              itemsToSlide: 5
            },
            1280: {
              itemsToShow: 7.53,
              itemsToSlide: 7
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
    seriesReleased (skey) {
      return this.episodeReleased(skey, 1)
    },
    episodeReleased (skey, ekey) {
      return this.now > new Date(this.database[skey].episodes[ekey].release)
    },
    humanDate (t) {
      var event = new Date(t)
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return event.toLocaleDateString('de-DE', options) + ' um ' + event.toLocaleTimeString('de-DE').slice(0, 5) + ' Uhr'
    }
  },
  computed: {
    seriesCount () {
      return Object.keys(this.database).length
    },
    episodeCount () {
      return Object.keys(this.database[this.active.series].episodes).length
    },
    releasedEpisodeCount () {
      return Object.keys(Object.filter(this.database[this.active.series].episodes, e => this.now > new Date(e.release))).length
    }
  }
}
</script>
