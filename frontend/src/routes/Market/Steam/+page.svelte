<script lang="ts">
	import CardStore from '$lib/components/MarketComponents/CardStore.svelte';
import LandingPage from '$lib/components/SteamComponents/LandingPage.svelte';
	export let data;
	const { games } = data;
</script>

<main class="relative h-auto w-full">
	<LandingPage />

	<div class="relative mt-6 flex flex-wrap items-center justify-center gap-6 w-full px-6 h-dvh">
		{#each data.games as game}
			<div class="card glass w-80">
				<figure>
					<img  src={game.thumbnail} alt="car!" class="object-cover  h-36 w-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title overflow-x-auto">{game.title}</h2>
					<p class="text-lg h-28 overflow-y-auto">{game.short_description}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-success">Purchase!</button>
					</div>
				</div>
			</div>
		{/each}
		<!-- <CardStore /> -->
	</div>
</main>

<style lang="postcss">
</style>
