<script lang="ts">
    export let data
    const { macOsGames } = data
</script>


<main class="mb-6 mt-6 flex h-auto flex-wrap items-center justify-center px-4">
	<!-- {#each SonyGames as PsFourGame }
    <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={PsFourGame.background_image}
            alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{PsFourGame.name}</h2>
          <p>Out of 5 : {PsFourGame.rating}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    {/each} -->

	{#each macOsGames as MacOsGame}
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure class="px-10 pt-10">
				<img src={MacOsGame.background_image} class="rounded-xl object-cover" alt="" />
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title">{MacOsGame.name}</h2>
				<p>Out of 5 : {MacOsGame.rating}</p>
				<div class="card-actions">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	{/each}
</main>
