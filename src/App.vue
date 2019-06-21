<template lang="pug">
div#app
  div#nav
    router-link(to='/') Home
    |&nbsp;|&nbsp;
    router-link(to='/about') About
  router-view.
  div link: https://youtu.be/ID
  div large thumb: http://i3.ytimg.com/vi/ID/maxresdefault.jpg
  div small thumb: http://i3.ytimg.com/vi/ID/hqdefault.jpg
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
