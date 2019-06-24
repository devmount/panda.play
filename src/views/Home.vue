<template lang="pug">
div.container.home
  //- show selection
  div.feature(v-if='active.episode !== false' :style='"background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(http://i3.ytimg.com/vi/" + database[active.series].episodes[active.episode].youtube + "/maxresdefault.jpg)"')
    div.thumb(v-if='!active.play')
      img(:src="'http://i3.ytimg.com/vi/' + database[active.series].episodes[active.episode].youtube + '/maxresdefault.jpg'" @click='active.play = true')
    iframe(v-else width='640' height='360' :src="'https://www.youtube.com/embed/' + database[active.series].episodes[active.episode].youtube" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen).
    div.description {{ database[active.series].episodes[active.episode].title }}
  //- show default feature
  div.feature(v-else)
    span
      //- logo svg
      Logo
      | Wähle einen Titel
      i(class='icon ion-md-arrow-down ml-1')
  //- show list of all series
  h2 {{ Object.keys(database).length }} Titel
  hooper(:settings='sliderSettings.series' ref='series' class='series')
    slide(v-for='(series, s, i) in database' :key='s' :index='i' :class='{ active: active.series == s }')
      img(:src="'http://i3.ytimg.com/vi/' + series.episodes[1].youtube + '/mqdefault.jpg'" @click='active.series = s; active.episode = 1; active.play = false')
    hooper-navigation(slot='hooper-addons')
  //- show episode list of current series
  h2(v-if='active.series !== false && Object.keys(database[active.series].episodes).length > 1')
    | {{ Object.keys(database[active.series].episodes).length }} Episoden in {{ database[active.series].title }}
    span(class='text-unimportant ml-1') {{ database[active.series].subtitle }}
  hooper(v-if='active.series == s && Object.keys(series.episodes).length > 1' v-for='(series, s) in database' :key='s' :settings='sliderSettings.episodes' :ref='s' class='episodes')
    slide(v-for='(episode, e, i) in series.episodes' :key='i' :index='i' :class='{ active: active.episode == e }')
      img(:src="'http://i3.ytimg.com/vi/' + episode.youtube + '/mqdefault.jpg'" @click='active.episode = e; active.play = false')
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
  }
}
</script>
