<template lang="pug">
div.home
  img(alt='Vue logo' src='../assets/logo.png')
  HelloWorld(msg='Welcome to Your Vue.js App').
  | {{ test }}
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
      test: Videos.test
    }
  }
}
</script>
