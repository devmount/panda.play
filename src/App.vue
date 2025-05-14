<template>
<div id="app">
  <div id="nav">
    <router-link to="/">
      <img class="logo" alt="PandaPlay logo" src="@/assets/logo.png" />
    </router-link>
    <router-link to="/">Let's Plays</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/stats">Stats</router-link>
    <router-link to="/impressum">Impressum</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script setup>
import { useHead, useSeoMeta } from '@unhead/vue';
import { provide } from 'vue';
import { timeFormatToSeconds, secondsToTimeFormat, diffYears } from '@/utils';
import database from '@/data/data.json';

// general meta data
const description = 'Games. Am liebsten Retro, Point & Click oder Coop - aber auf jeden Fall gemeinsam. Let\'s play together!';
const brand = 'PandaPlay';
const subtitle = 'Point and Click, Retro und Coop Let\'s Plays';
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

// General database calculations and stats
const totalSeriesCount = Object.keys(database).length;
const totalEpisodesCount = Object.values(database).reduce((p, c) => p + Object.keys(c.episodes).length, 0);
const totalWatchSeconds = Object.values(database).reduce(
	(ps, cs) => ps + Object.values(cs.episodes).reduce((p, c) => p + timeFormatToSeconds(c.duration), 0),
  0
);
const startDate = new Date(database[Object.keys(database).pop()].episodes['1'].release);
const years = diffYears(new Date(), startDate);
const seriesLengths = Object.values(database).map(
	(s) => Object.values(s.episodes).reduce((p, c) => p + timeFormatToSeconds(c.duration), 0)
);
const avgSeriesLength = Math.floor(seriesLengths.reduce((a, b) => a + b) / seriesLengths.length);
const maxSeriesLength = Math.max(...seriesLengths);
const episodeLengths = Object.values(database).map(
	(s) => Object.values(s.episodes).map((e) => timeFormatToSeconds(e.duration))
).flat();
const avgEpisodeLength = Math.floor(episodeLengths.reduce((a, b) => a + b) / episodeLengths.length);
const maxEpisodeLength = Math.max(...episodeLengths);

let gaps = [];
Object.entries(database).forEach((s, i) => {
	if (i > 0) {
		gaps.push([Object.entries(database)[i-1][1].episodes['1'].release, Object.values(s[1].episodes).pop().release]);
	}
});
gaps = gaps.map(g => Math.round(Math.abs((new Date(g[0]) - new Date(g[1])) / (24 * 60 * 60 * 1000))))
const averageDaysBetweenSeries = gaps.reduce((a, b) => a + b) / gaps.length;


provide('db', database);
provide('totalSeriesCount', totalSeriesCount);
provide('totalEpisodesCount', totalEpisodesCount);
provide('totalWatchHours', Math.floor(totalWatchSeconds / 3600));
provide('startYear', startDate.getFullYear());
provide('seriesPerYear', (totalSeriesCount / years).toFixed(1));
provide('avgSeriesLength', (avgSeriesLength/(60 * 60)).toFixed(1));
provide('maxSeriesLength', (maxSeriesLength/(60 * 60)).toFixed(1));
provide('episodesPerYear', (totalEpisodesCount / years).toFixed(1));
provide('avgEpisodeLength', secondsToTimeFormat(avgEpisodeLength));
provide('maxEpisodeLength', secondsToTimeFormat(maxEpisodeLength));
provide('avgEpisodeCount', (totalEpisodesCount / totalSeriesCount).toFixed(1));
provide('averageDaysBetweenSeries', averageDaysBetweenSeries.toFixed(1));

</script>

<style lang="stylus">
// import font
@font-face {
  font-family: 'Fira Sans';
  font-weight: 400;
  src: url(@/assets/fonts/FiraSans-Regular.ttf);
}
@font-face {
  font-family: 'Fira Sans';
  font-weight: 700;
  src: url(@/assets/fonts/FiraSans-Bold.ttf);
}
@font-face {
  font-family: 'Fira Mono';
  font-weight: 400;
  src: url(@/assets/fonts/FiraMono-Regular.ttf);
}
@font-face {
  font-family: 'Fira Mono';
  font-weight: 700;
  src: url(@/assets/fonts/FiraMono-Bold.ttf);
}

// import app styles
@import "assets/global";
</style>
