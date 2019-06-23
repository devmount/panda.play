<template lang="pug">
div.home
  //- show selection
  div.feature
    img(v-if='active.episode !== false' :src="'http://i3.ytimg.com/vi/' + database[active.series].episodes[active.episode].youtube + '/maxresdefault.jpg'")
    span(v-else)
      i(class='icon ion-md-film')
      | Wähle einen Titel
      i(class='icon ion-md-arrow-down ml-1')
  //- show list of all series
  h2 {{ Object.keys(database).length }} Titel
  hooper(:settings='sliderSettings.series' ref='series' class='series')
    slide(v-for='(series, s, i) in database' :key='s' :index='i' :class='{ active: active.series == s }')
      img(:src="'http://i3.ytimg.com/vi/' + series.episodes[1].youtube + '/mqdefault.jpg'" @click='active.series = s; active.episode = 1')
    hooper-navigation(slot='hooper-addons')
  //- show episode list of current series
  h2(v-if='active.series !== false && Object.keys(database[active.series].episodes).length > 1')
    | {{ Object.keys(database[active.series].episodes).length }} Episoden in {{ database[active.series].title }}
    span(class='text-unimportant ml-1') {{ database[active.series].subtitle }}
  hooper(v-if='active.series == s && Object.keys(series.episodes).length > 1' v-for='(series, s) in database' :key='s' :settings='sliderSettings.episodes' :ref='s' class='episodes')
    slide(v-for='(episode, e, i) in series.episodes' :key='i' :index='i' :class='{ active: active.episode == e }')
      img(:src="'http://i3.ytimg.com/vi/' + episode.youtube + '/mqdefault.jpg'" @click='active.episode = e')
    hooper-navigation(slot='hooper-addons')
</template>

<script>
// get data
import Data from '@/data/data.json'
// internal components
import HelloWorld from '@/components/HelloWorld.vue'
// slider component
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Hooper,
    Slide,
    HooperNavigation
  },
  data () {
    return {
      database: Data,
      sliderSettings: {
        series: {
          itemsToShow: 4.2,
          itemsToSlide: 4
        },
        episodes: {
          itemsToShow: 6.2,
          itemsToSlide: 6
        }
      },
      active: {
        series: false,
        episode: false
      }
    }
  }
}
</script>
