<script lang="ts">

	export let data;

	const { WindowsGames } = data;
</script>

<main class="mb-6 mt-6 flex h-auto flex-wrap items-center justify-center px-4">
	{#each WindowsGames as WindowsGame}
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure class="px-10 pt-10">
				<img src={WindowsGame.background_image} class="rounded-xl object-cover" alt="" />
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title">{WindowsGame.name}</h2>
				<p>Out of 5 : {WindowsGame.rating}</p>
				<div class="card-actions">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	{/each}
</main>
