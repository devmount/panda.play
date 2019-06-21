<template lang="pug">
div.home
  img(alt='Vue logo' src='../assets/logo.png')
  HelloWorld(msg='Welcome to Your Vue.js App').
  div(v-for='series in test' :key='series.title')
    | {{series.title}}
    div(v-for='episode in series.episodes' :key='episode.youtube')
      img(:src="'http://i3.ytimg.com/vi/' + episode.youtube + '/hqdefault.jpg'")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Videos from '@/data/videos.json'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      test: Videos
    }
  }
}
</script>
