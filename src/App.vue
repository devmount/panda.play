<template lang="pug">
div#app
  div#nav
    router-link(to='/')
      img(class='logo' alt='PandaPlay logo' src='@/assets/logo.png')
    router-link(to='/') Let's Plays
    router-link(to='/info') Info
    router-link(to='/impressum') Impressum
  router-view.
</template>

<script>
// general meta data
let description = 'Games. Am liebsten Retro, Point & Click oder Coop - aber auf jeden Fall gemeinsam. Let\'s play together!'
let title = 'PandaPlay'
let subtitle = 'Point and Click, Retro und Coop Let\'s Plays'

export default {
  name: 'app',
  metaInfo: {
    title: 'PandaPlay',
    titleTemplate: '%s - ' + subtitle + ' - ' + title,
    meta: [
      // general
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },
      { rel: 'canonical', href: 'https://panda-play.de' },
      // OpenGraph data
      { property: 'og:title', content: title + ' - ' + subtitle },
      { property: 'og:site_name', content: title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://panda-play.de' },
      { property: 'og:image', content: 'https://panda-play.de/img/preview.png' },
      { property: 'og:description', content: description },
      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://panda-play.de' },
      { name: 'twitter:title', content: title + ' - ' + subtitle },
      { name: 'twitter:description', content: description },
      // { name: 'twitter:creator', content: '@pandaplay' },
      { name: 'twitter:image:src', content: 'https://panda-play.de/img/preview.png' },
      // Google / Schema.org
      { itemprop: 'name', content: title + ' - ' + subtitle },
      { itemprop: 'description', content: description },
      { itemprop: 'image', content: 'https://panda-play.de/img/preview.png' }
    ]
  }
}
</script>

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

#app
  display inline-block
  min-height 100vh
  width 100vw
  background-image url('assets/background.png')
  background-position center bottom
  background-size contain
  background-repeat no-repeat

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

// display
.hide-sm
  @media (max-width 640px)
    display none
.center-sm
  @media (max-width 640px)
    text-align center
.block-sm
  @media (max-width 640px)
    display block

// headings
h1, h2, h3
  font-weight normal
  letter-spacing 2px
  text-transform uppercase
h1
  margin-top 1em
  text-align center

// text
.text-unimportant
  color #777
.text-small
  font-size .85em

// cursor
.c-hand
  cursor pointer

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
    color #666666
    &.router-link-exact-active
      color #008ba3

    .logo
      height 30px

.container
  margin 0 auto

  // sm
  @media (max-width 640px)
    width calc(100%-20px)
    padding 0 10px
  // md
  @media (min-width 641px) and (max-width 960px)
    width 640px
  // lg
  @media (min-width 961px) and (max-width 1280px)
    width 960px
  // xl
  @media (min-width 1281px)
    width 1280px

  &.container-sm
    @media (max-width 640px)
      width 100%
    @media (min-width 641px)
      width 640px

  .feature
    text-align center
    background-size cover
    background-position center
    @media (max-width 640px)
      height auto
    @media (min-width 641px)
      height 405px

    .thumb
      margin 0 auto

      @media (max-width 640px)
        width 100vw
        margin-left -10px
      @media (min-width 641px)
        height 360px
        width 640px

      img
        display block
        width inherit
        height inherit

    iframe
      display block
      margin 0 auto

      @media (max-width 640px)
        width 100vw
        height 56.25vw
        margin-left -10px
      @media (min-width 641px)
        height 360px
        width 640px

    .description
      height 1.4em
      padding .5em 0
      background #000
      font-size 1.2em
      letter-spacing 2px
      text-transform uppercase

      @media (max-width 640px)
        width 100vw
        margin-left -10px

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
      &.is-disabled
        display none
      @media (max-width 640px)
        opacity 1
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
