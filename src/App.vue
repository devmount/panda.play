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
import { useMeta } from 'vue-meta';

// general meta data
const description = 'Games. Am liebsten Retro, Point & Click oder Coop - aber auf jeden Fall gemeinsam. Let\'s play together!'
const title = 'PandaPlay'
const subtitle = 'Point and Click, Retro und Coop Let\'s Plays'

useMeta({
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
});
</script>

<style lang="stylus">
// import font
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
@import url('https://fonts.googleapis.com/css?family=Fira+Mono');

// import app styles
@import "assets/global";
</style>
