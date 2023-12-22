<template>
<div id="app">
	<metainfo>
		<template v-slot:title="{ content }">{{ content }} - {{ subtitle }} - {{ title }}</template>
	</metainfo>
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

// general meta data
const description = 'Games. Am liebsten Retro, Point & Click oder Coop - aber auf jeden Fall gemeinsam. Let\'s play together!'
const brand = 'PandaPlay'
const subtitle = 'Point and Click, Retro und Coop Let\'s Plays'
const base = window.location.origin;

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
</script>

<style lang="stylus">
// import font
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
@import url('https://fonts.googleapis.com/css?family=Fira+Mono');

// import app styles
@import "assets/global";
</style>
