<template>
<div id="app">
  <div id="nav">
    <router-link to="/">
      <img class="logo" alt="PandaPlay logo" src="@/assets/logo.png" />
    </router-link>
    <router-link to="/">Let's Plays</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/impressum">Impressum</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script setup>
import { useHead, useSeoMeta } from 'unhead';
import { provide } from 'vue';
import { timeFormatToSeconds } from '@/utils';
import database from '@/data/data.json';

// general meta data
const description = 'Games. Am liebsten Retro, Point & Click oder Coop - aber auf jeden Fall gemeinsam. Let\'s play together!'
const brand = 'PandaPlay'
const subtitle = 'Point and Click, Retro und Coop Let\'s Plays'
const base = window.location.origin;

// handle meta and seo
useHead({
   titleTemplate: (title) => !title ? brand : `${title} - ${brand}`,
});
useSeoMeta({
   ogSiteName: brand,
   ogType: 'website',
   ogUrl: base,
   ogImage: `${base}/img/preview.png`,
   ogDescription: description,
   twitterCard: 'summary',
   twitterSite: base,
   twitterTitle: `${brand} - ${subtitle}`,
   twitterDescription: description,
   twitterCreator: '@devmount',
   twitterImage: `${base}/img/preview.png`,
});

// handle general database calculations
provide('db', database);
provide('totalSeriesCount', Object.keys(database).length);
provide('totalEpisodesCount', Object.values(database).reduce((p, c) => p + Object.keys(c.episodes).length, 0))

const totalWatchSeconds = Object.values(database).reduce(
  (ps, cs) => ps + Object.values(cs.episodes).reduce((p, c) => p + timeFormatToSeconds(c.duration), 0),
  0
)
provide('totalWatchHours', Math.floor(totalWatchSeconds / 3600));
</script>

<style lang="stylus">
// import font
@font-face {
  font-family: 'Fira Sans';
  font-weight: 400;
  src: url(./fonts/FiraSans-Regular.ttf);
}
@font-face {
  font-family: 'Fira Sans';
  font-weight: 700;
  src: url(./fonts/FiraSans-Bold.ttf);
}
@font-face {
  font-family: 'Fira Mono';
  font-weight: 400;
  src: url(./fonts/FiraMono-Regular.ttf);
}
@font-face {
  font-family: 'Fira Mono';
  font-weight: 700;
  src: url(./fonts/FiraMono-Bold.ttf);
}

// import app styles
@import "assets/global";
</style>
