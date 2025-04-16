<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Xbox from '$lib/assets/images/nintendo.jpg';
	import Sony from '$lib/assets/images/sony.jpg';
	import Nintendo from '$lib/assets/images/xbox.jpg';
	import Steam from '$lib/assets/images/pcGaming.jpg';

	function revealonHover() {
		let tiles = document.querySelectorAll('.tile') as NodeListOf<Element>;
		if (tiles) {
			tiles.forEach((tile: any) => {
				tile.addEventListener('mousemove', (e: MouseEvent) => {
					let x = e.clientX;
					let y = e.clientY;
					let tileRect = tile.getBoundingClientRect();
					let relativeMouseX = x - tileRect.left;
					let MouseXasDecimal = relativeMouseX / tileRect.width;

					let opacity = MouseXasDecimal;
					let blur = 1 - MouseXasDecimal;

					tile.style.setProperty('--opacity', String(opacity));
					tile.style.setProperty('--blur', String(blur));
				});
			});
		}

		let tile = gsap.utils.toArray('.tile');
		gsap.fromTo(
			tile,
			{
				scale: 0,
				yPercent : -50
			},
			{
				scale: 1,
				yPercent : 0,
				duration: .75,
				stagger: 0.25
			}
		);
	}

	onMount(() => {
		revealonHover();
	});
</script>

<section id='main-container' class="relative h-dvh w-full overflow-hidden flex items-center justify-center flex-col">
	<div id="tiles-text-container" class="relative flex h-full w-full items-center justify-center  flex-col gap-y-11">
		<h1 class="text-5xl" id="welcome-text">
			Welcome Dear visitors
		</h1>
		<div id="wrapper-card" class="flex items-center justify-center">
			<div class="tile relative aspect-square w-[40vmin] rounded-2xl">
				<img src={Sony} alt="" class="absolute -z-10 h-full w-full rounded-2xl object-cover" />
			</div>
			<div class="tile relative aspect-square w-[40vmin] rounded-2xl">
				<img src={Xbox} alt="" class="absolute -z-10 h-full w-full rounded-2xl object-cover" />
			</div>
			<div class="tile relative aspect-square w-[40vmin] rounded-2xl">
				<img src={Nintendo} alt="" class="absolute -z-10 h-full w-full rounded-2xl object-cover" />
			</div>
			<div class="tile relative aspect-square w-[40vmin] rounded-2xl">
				<img src={Steam} alt="" class="absolute -z-10 h-full w-full rounded-2xl object-cover" />
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.tile {
		background-color: rgb(31, 41, 55);
		box-shadow:
			0vmin 3vmin 6vmin rgb(0 0 0 / 25%),
			inset 0vmin 0.5vmin 1vmin rgb(255 255 255 / 15%);
	}

	.tile:nth-child(1) {
		rotate: 3deg;
		z-index: 4;
	}

	.tile:nth-child(2) {
		rotate: -2deg;
		z-index: 3;
	}

	.tile:nth-child(3) {
		rotate: 5deg;
		z-index: 2;
	}
	.tile:nth-child(4) {
		rotate: -5deg;
		z-index: 1;
	}

	.tile:is(:nth-child(2), :nth-child(3)) {
		margin-left: -10vmin;
	}

	.tile > img {
		opacity: 0;
		filter: blur(100%);
		transition: all 350ms ease;
	}

	.tile:hover > img {
		opacity: var(--opacity);
		filter: blur(calc(var(--blur) * 10px));
	}


	#welcome-text{
		font-family: var(--font-family-style);
	}

	@media screen and (max-width: 768px){
		#main-container{
			height: 1700px;
			width: 100%;
			overflow: hidden;
			position: relative;

			
		}
		#tiles-text-container{
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding-top: 1rem;
		}

		#wrapper-card{
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			flex-direction: column;
			gap: 2rem;
		}
		.tile{
			width: 45vmin;
			aspect-ratio: 1;
		}
	}
	@media screen and (max-width: 425px){
		#main-container{
			height: 1200px;
			width: 100%;
			overflow: hidden;
			position: relative;
		}
		#welcome-text{
			font-size:2rem;
		}
		#tiles-text-container{
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding-top: 1rem;
		}

		#wrapper-card{
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			flex-direction: column;
			gap: 2rem;
		}
		.tile{
			width: 45vmin;
			aspect-ratio: 1;
		}
	}

</style>
