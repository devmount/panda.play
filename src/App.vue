<template lang="pug">
div#app
  div#nav
    router-link(to='/')
      img(class='logo' alt='PandaPlay logo' src='@/assets/logo.png')
    router-link(to='/') Let's Plays
    router-link(to='/about') Info
  router-view.
  //- div link: https://youtu.be/ID
  //- div large thumb: http://i3.ytimg.com/vi/ID/maxresdefault.jpg
  //- div small thumb: http://i3.ytimg.com/vi/ID/hqdefault.jpg
</template>

<style lang="stylus">
html, body
  background #0a0a0a
  color #ddd
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin 0
  padding 0

#nav
  background #020202
  padding 15px
  text-align center

  a
    display inline-block
    vertical-align: middle;
    margin 0 10px
    height 30px
    line-height 30px
    font-weight bold
    text-decoration none
    color #364244
    &.router-link-exact-active
      color #008ba3

    .logo
      height 30px

.home
  width 70vw
  margin 0 auto

  .feature
    margin-top 15px
    text-align center
    height 360px

    img
      height inherit

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
