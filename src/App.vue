<template lang="pug">
div#app
  div#nav
    router-link(to='/') Home
    |&nbsp;|&nbsp;
    router-link(to='/about') About
  //- img(alt='Vue logo' src='@/assets/logo.png' width='20%')
  router-view.
  div link: https://youtu.be/ID
  div large thumb: http://i3.ytimg.com/vi/ID/maxresdefault.jpg
  div small thumb: http://i3.ytimg.com/vi/ID/hqdefault.jpg
</template>

<style lang="stylus">
html, body
  background #0a0a0a
  color #ddd

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  width 70vw
  margin 0 auto

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

.home
  .feature
    img
      width 50%

  .hooper
    height 135px

    .hooper-slide
      img
        display block
        margin 0 auto
        width 230px
        cursor pointer
        border 5px solid transparent
        box-sizing border-box

      &.active img, img:hover
        border 5px solid rgb(0, 139, 163)
</style>
