<template lang="pug">
div.home
  //- show selection
  div.feature
    img(v-if='active.episode !== false' :src="'http://i3.ytimg.com/vi/' + database[active.series].episodes[active.episode].youtube + '/maxresdefault.jpg'")
  //- show list of all series
  h2 Series ({{ Object.keys(database).length }})
  hooper(:settings='sliderSettings' ref='series')
    slide(v-for='(series, s, i) in database' :key='s' :index='i' :class='{ active: active.series == s }')
      img(:src="'http://i3.ytimg.com/vi/' + series.episodes[1].youtube + '/mqdefault.jpg'" @click='active.series = s; active.episode = 1')
    hooper-navigation(slot='hooper-addons')
  //- show episode list of current series
  h2 Episodes
  hooper(v-if='active.series == s' v-for='(series, s) in database' :key='s' :settings='sliderSettings' :ref='s')
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
        itemsToShow: 5.2,
        itemsToSlide: 5
      },
      active: {
        series: false,
        episode: false
      }
    }
  }
}
</script>
