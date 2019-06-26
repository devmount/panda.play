<template lang="pug">
div#app
  div#nav
    router-link(to='/')
      img(class='logo' alt='PandaPlay logo' src='@/assets/logo.png')
    router-link(to='/') Let's Plays
    router-link(to='/info') Info
  router-view.
  //- div link: https://youtu.be/ID
  //- div large thumb: http://i3.ytimg.com/vi/ID/maxresdefault.jpg
  //- div small thumb: http://i3.ytimg.com/vi/ID/hqdefault.jpg
</template>

<style lang="scss">
// import font
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
@import url('https://fonts.googleapis.com/css?family=Fira+Mono');

// import ionicons
$ionicons-font-path: "~ionicons/dist/fonts";
@import "~ionicons/dist/scss/ionicons";
</style>

<style lang="stylus">
html, body
  background #0a0a0a
  color #ddd
  font-family 'Fira Sans', 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin 0
  padding 0

// positions and margin
.mt-1
  margin-top .5em
.ml-1
  margin-left .5em
.mb-1
  margin-bottom .5em
.mr-1
  margin-right .5em
.mt-2
  margin-top 1em
.ml-2
  margin-left 1em
.mb-2
  margin-bottom 1em
.mr-2
  margin-right 1em

// headings
h1, h2, h3
  font-weight normal
  letter-spacing 2px
  text-transform uppercase

// text
.text-unimportant
  color #777
.text-small
  font-size .85em

// animations
@keyframes hover
  0%
    transform translateY(0)
  100%
    transform translateY(-15px)
@keyframes wink
  48%
    opacity 1
  50%
    opacity 0
  52%
    opacity 1

// tags
.tag
  background #222
  font-size .8em
  font-family 'Fira Mono', 'monospace'
  padding .15em .3em
  border-radius .3em

// navigation menu
#nav
  background #000
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

.container
  @media (max-width 960px)
    width 640px
  @media (min-width 961px) and (max-width 1280px)
    width 960px
  @media (min-width 1281px)
    width 1280px
  margin 0 auto

  .feature
    margin-top 15px
    text-align center
    height 405px
    background-size cover
    background-position center

    .thumb
      height 360px
      width 640px
      margin 0 auto
      cursor pointer

      img
        height inherit

    iframe
      display block
      margin 0 auto

    .description
      height 1.4em
      padding .5em 0
      background #000
      font-size 1.2em
      letter-spacing 2px
      text-transform uppercase

    &>span
      display inline-block
      text-transform uppercase
      font-size 2.3em
      font-weight bold
      letter-spacing 5px
      margin-top 30px
      color #555

      .feature-logo
        width 240px
        display: block
        margin 0 auto 10px auto
        .st1, .st2
          transition .5s fill ease-in-out
        .st1
          fill #1a1a1a
        .st2
          fill #555

  &:hover span .feature-logo
    .st1
      fill #008BA3
    .st2
      fill #fff
    .heart
      animation: hover .75s infinite alternate
    .eye
      animation: wink 4s infinite

  .hooper
    .hooper-slide
      img
        display block
        cursor pointer
        border 5px solid transparent
        box-sizing border-box
        transition .15s border ease-in-out

      &.active img
        border 5px solid #fff
      img:hover
        border 5px solid #999

    .hooper-navigation button
      opacity 0
      background rgba(0,0,0,.5)
      transition .15s background ease-in-out, .15s opacity ease-in-out
      padding 1em 0
      svg
        width 50px
        height 50px
        path:nth-child(3)
          fill: #fff
      &:hover
        background rgba(0,0,0,.8)
    &:hover .hooper-navigation button
      opacity 1

    &.series
      height 135px
      .hooper-slide img
        width 230px
      .hooper-navigation button
        height 125px
    &.episodes
      height 100px
      .hooper-slide img
        width 170px
      .hooper-navigation button
        height 90px

</style>
