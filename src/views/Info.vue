<template>
<div class="container container-sm info">
	<h1>Was ist das hier?</h1>
	<p>Eine Übersicht aller Let's Plays, die von PandaPlay aufgenommen und veröffentlicht wurden.</p>
	<h1>Worum geht's hier?</h1>
	<p>Games.</p>
	<p>
		Am liebsten Retro, Point &amp; Click oder Coop - aber auf jeden Fall gemeinsam!<br />
		Wir sind verplant, vergesslich und Spät-Checker - haben aber immer maximalen Spaß beim Spielen!
	</p>
	<h1>Sonst noch was?</h1>
	<p>
		Das ist ein Hobby-Projekt.
		Wir erheben keinen Anspruch auf regelmäßige Veröffentlichungen oder professionelles Gameplay.
		Wenn du Feedback für uns hast, kommentiere sehr gern einfach unsere Videos auf Youtube!
	</p>
	<p>Grüße an unsere Schwester, der all unsere Let's Plays gewidmet sind! ♥</p>
	<h1>Coole Website!</h1>
	<p>
		Danke. Diese Website ist ein Open Source Projekt.
		Du siehst sie aktuell in Version {{ $version }}
		und findest sie <a href="https://github.com/devmount/panda.play" target="_blanke">auf Github</a>.
	</p>
</div>
</template>

<script>
export default {
	name: 'info',
	metaInfo: {
		title: 'Information'
	}
}
</script>
