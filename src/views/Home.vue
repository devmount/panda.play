<template lang="pug">
div.home
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
      svg.feature-logo(version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 475 471' style='enable-background:new 0 0 475 471;' space='preserve')
        circle.st1(cx='233' cy='232' r='206')
        path(d='M373.2,203.2c-16.8-12.2-40.7-14.2-59.8-6.7c-9.8,3.8-22.8,10.3-22.5,22.6c0.2,5.5,2.8,11.2,7.1,14.7 c4.5,3.7,10.4,4.8,15.8,6.3c0.2,0.1,0.4,0.1,0.7,0.1c10.1,3,19.5,7.9,28.2,14.1c4.6,3.2,8.6,7,13.1,10.4c6.7,5.1,15.1,9.8,23.7,6.5 c8.1-3.1,13.4-12.3,14.6-20.5C396.6,233.5,387.1,213.3,373.2,203.2z')
        path(d='M149.4,236.1c-21.1-5.2-43.7,0.6-59.9,15.1C75.7,263.6,70,285.1,74.7,303c2.5,9.4,8.3,16.2,17.1,20.2 c8.2,3.7,16.4-0.9,21.9-7c4.4-4.9,7.6-10.6,11.6-15.8c7.1-9.3,15.6-17.6,25.6-23.7c8.5-5,16.6-10,17-21 C168.3,244,159.5,238.6,149.4,236.1z')
        g.heart
          path(d='M311.7,86c-10.4-4.1-21-2.9-29.7,2.4c-4.4-11.2-14.1-20.3-25.8-23.5c-14.9-4-32,1.5-41.1,14.2c-10.3,14.3-3.7,31.8,6.4,44.1 c10.8,13.1,23.2,24.2,32.1,38.8c1.9,3.2,5.9,4,8.9,2.7c0.2-0.1,0.3-0.1,0.5-0.2c12.1-5.4,24.4-10.5,37.4-13.6 c14.7-3.4,34.7-8.3,39.3-25.1C344.3,108.7,325.8,91.6,311.7,86z')
          path.st2(d='M255.5,95.1c-2-0.7-3.9-1.3-5.9-2c0.7-2,1.5-4,2.2-6c2.4-6.7-8.2-9.5-10.6-2.9c-0.7,1.8-1.3,3.6-2,5.4 c-2.6-0.9-5.3-1.8-7.9-2.7c-6.7-2.3-9.6,8.3-2.9,10.6c2.4,0.8,4.7,1.6,7.1,2.4c-0.6,1.7-1.3,3.5-1.9,5.2c-2.4,6.7,8.2,9.5,10.6,2.9 c0.6-1.5,1.1-3.1,1.7-4.6c2.2,0.8,4.5,1.5,6.7,2.3C259.3,108,262.1,97.3,255.5,95.1z')
          path.st2(d='M293,118.9c7.1,0,7.1-11,0-11S285.9,118.9,293,118.9L293,118.9z')
          path.st2(d='M309.1,109.7c7.1,0,7.1-11,0-11S302,109.7,309.1,109.7L309.1,109.7z')
          path.st2(d='M316.1,127.1c7.1,0,7.1-11,0-11C309.1,116.1,309,127.1,316.1,127.1L316.1,127.1z')
          path.st2(d='M300,135.3c7.1,0,7.1-11,0-11C293,124.3,292.9,135.3,300,135.3L300,135.3z')
        path.st2(d='M187.3,432.9l51.5,5l54.2-8.8l55.8-26.7l49-46.7l12.1-21.1c-1.4-11.2-4.7-22.2-9.8-32.1 c-12.6-24.5-34-43.1-57.5-56.7c-12.1-7-25-13.4-38.5-17.4c-15.8-4.7-32.6-3.3-48.8-1.5c-31.3,3.6-62.2,12.7-90.4,26.7 c-13.8,6.8-26.9,14.7-37.1,26.5c-9.3,10.8-16.3,23.8-20.7,37.4c-8,24.6-8.1,51.5-0.4,76.1l24.6,17.4L187.3,432.9z')
        path(d='M414.7,313c-9.2-27.8-29.7-50.1-53.4-66.6c-12.5-8.7-26-15.8-39.9-21.8c-16.3-6.9-32.1-9.7-49.8-8.7 c-33.7,1.8-66.9,9.7-97.8,23c-15,6.4-30.1,13.8-42.7,24.3c-11.7,9.8-20.9,22.8-27.4,36.6c-12.4,26.3-15.5,56.7-9.4,85.2l5.9,4.2 l6.3,4.4c-7.7-24.7-7.6-51.6,0.4-76.1c4.4-13.6,11.4-26.6,20.7-37.4c10.2-11.8,23.3-19.6,37.1-26.5c28.2-14,59.1-23.1,90.4-26.7 c16.2-1.9,33-3.2,48.8,1.5c13.4,4,26.4,10.4,38.5,17.4c23.6,13.6,44.9,32.3,57.5,56.7c5.1,9.9,8.4,20.9,9.8,32.1l3.8-6.6l3.6-6.3 C416.5,318.8,415.7,315.9,414.7,313z')
        path(d='M233,444c-116.9,0-212-95.1-212-212S116.1,20,233,20s212,95.1,212,212S349.9,444,233,444z M233,32C122.7,32,33,121.7,33,232 s89.7,200,200,200s200-89.7,200-200S343.3,32,233,32z')
        path(d='M224.9,301c-11.1-5.7-23.5-6.2-35.6-4c-12.5,2.2-25.5,6.6-36.8,12.3c-10.2,5.1-19.2,13.4-21.7,25 c-2.6,12.2-0.1,27.2,4.8,38.5c9.3,21.6,33.5,34.7,55.9,27.3c8-0.5,15.4-5,21.7-10.1c8.8-7,16.1-15.9,21.9-25.4 C247.7,343.9,249.5,313.6,224.9,301z')
        circle.st2.eye(cx='205.9' cy='332.2' r='14.7')
        path(d='M375,306c-2.8-12.2-10.9-20.9-22.3-25.5c-11.2-4.5-24.2-5.6-36.2-6.4c-12.4-0.8-25.2,0.4-36.3,6.5 c-10.6,5.9-18.1,15.9-19.6,28c-1.5,12.9,3.5,25.3,11.4,35.3c7.5,9.6,17.2,18.1,27.8,24.1c8,4.5,17.2,8.3,26.3,7.2 c21.5,2.9,40.8-11.9,48-32.1C378.1,331.6,377.7,317.7,375,306z')
        circle.st2.eye(cx='299' cy='314.9' r='14.7')
        path(d='M273,366.1c-0.8-0.9-1.9-1.4-3.4-1.4c-5,0.2-10,0.3-15,0.5c-3.9,0.1-6.7,5.3-3.4,8.2c4.1,3.6,9,9.7,15.1,8.4 c5-1.1,7.5-6,8.8-10.5C275.8,368.9,274.7,367,273,366.1z')
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
