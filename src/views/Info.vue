<template lang="pug">
div.container.container-sm.info
  h1 Was ist das hier?
  p Eine Übersicht aller Let's Plays, die von PandaPlay aufgenommen und veröffentlicht wurden.
  h1 Worum geht's hier?
  p Games.
  p Am liebsten Retro, Point &amp; Click oder Coop - aber auf jeden Fall gemeinsam!
    br
    | Wir sind verplant, vergesslich und Spät-Checker - haben aber immer maximalen Spaß beim Spielen!
  h1 Sonst noch was?
  p Das ist ein Hobby-Projekt. Wir erheben keinen Anspruch auf regelmäßige Veröffentlichungen oder professionelles Gameplay. Wenn du Feedback für uns hast, kommentiere sehr gern einfach unsere Videos auf Youtube!
  p Grüße an unsere Schwester, der all unsere Let's Plays gewidmet sind! ♥
  h1 Coole Website!
  p Danke. Wir haben diese Website als Open Source SPA mit Vue.js gebaut. Du siehst sie aktuell in Version {{ $version }} und findest sie <a href="https://github.com/devmount/panda.play" target="_blanke">auf Github</a>.
</template>

<script>
export default {
  name: 'info',
  metaInfo: {
    title: 'Information'
  }
}
</script>
