<template>
<div class="container container-sm info">
  <h1>Statistik</h1>
  <div class="grid">
		<div class="card">
			<h2>{{ startYear }}</h2>
			<p>Anno domini</p>
		</div>
		<div class="card">
			<h2>{{ totalSeriesCount }}</h2>
			<p>Titel abgeschlossen</p>
		</div>
		<div class="card">
			<h2>{{ totalEpisodesCount }}</h2>
			<p>Episoden gespielt</p>
		</div>
		<div class="card">
			<h2>{{ totalWatchHours }}h</h2>
			<p>Gesamtspielzeit</p>
		</div>
		<div class="card">
			<h2>{{ averageDaysBetweenSeries }}</h2>
			<p>Ø Tage zwischen Titeln</p>
		</div>
		<div class="card">
			<h2>{{ avgEpisodeCount }}</h2>
			<p>Ø Episoden pro Titel</p>
		</div>
		<div class="card">
			<h2>{{ seriesPerYear }}</h2>
			<p>Ø Titel pro Jahr</p>
		</div>
		<div class="card">
			<h2>{{ avgSeriesLength }}h</h2>
			<p>Ø Titelspielzeit</p>
		</div>
		<div class="card">
			<h2>{{ maxSeriesLength }}h</h2>
			<p>Längster Titel</p>
		</div>
		<div class="card">
			<h2>{{ episodesPerYear }}</h2>
			<p>Ø Episoden pro Jahr</p>
		</div>
		<div class="card">
			<h2>{{ avgEpisodeLength }}</h2>
			<p>Ø Episodenspielzeit</p>
		</div>
		<div class="card">
			<h2>{{ maxEpisodeLength }}</h2>
			<p>Längste Episode</p>
		</div>
	</div>
</div>
</template>

<script setup>
import { inject } from 'vue';
import { useSeoMeta } from '@unhead/vue';

useSeoMeta({ title: 'Information' });

const totalSeriesCount = inject('totalSeriesCount');
const totalEpisodesCount = inject('totalEpisodesCount');
const totalWatchHours = inject('totalWatchHours');
const startYear = inject('startYear');
const seriesPerYear = inject('seriesPerYear');
const avgSeriesLength = inject('avgSeriesLength');
const maxSeriesLength = inject('maxSeriesLength');
const episodesPerYear = inject('episodesPerYear');
const avgEpisodeLength = inject('avgEpisodeLength');
const maxEpisodeLength = inject('maxEpisodeLength');
const avgEpisodeCount = inject('avgEpisodeCount');
const averageDaysBetweenSeries = inject('averageDaysBetweenSeries');
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	.card {
		background-color: black;
		padding: 1rem;
		text-align: center;

		h2 {
			font-size: 3rem;
			margin: 0;
			text-transform: none;
		}
	}
}

@media (max-width: 640px) {
	.grid {
		grid-template-columns: 1fr;
	}
}

</style>
