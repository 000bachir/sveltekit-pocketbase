<!--TODO: RESPONSIVENESS FOR THE COMPONENT	-->

<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	function Card() {
		const card = gsap.utils.toArray('.text');
		const wrapper = document.getElementById('wrapper') as HTMLElement;
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			card,
			{
				opacity: 0,
				scale: 0.5
			},
			{
				scrollTrigger: {
					trigger: wrapper,
					scrub: 1.9,
					end: 'bottom bottom' // This ensures the animation stops at the bottom of the trigger
				},
				duration: 1,
				opacity: 1,
				scale: 1,
				stagger: 1
			}
		);
	}
	onMount(() => {
		Card();
	});
</script>

<main id="container" class="relative h-auto w-full overflow-hidden ">
	<section class="relative h-dvh w-full">
		<div id="wrapper" class="relative mt-4 flex h-28 w-full items-center justify-center z-10">
			<h1 class="flex gap-1 text-4xl text-white">
				<span class="text">A</span>
				<span class="text">place</span>
				<span class="text">where</span>
				<span class="text">every</span>
				<span class="text">gaming</span>
				<span class="text">genre</span>
				<span class="text">converges</span>
				<span class="text">seamlessly</span>.
			</h1>
		</div>
		<!--? card section -->
		<div class="card-swiper">
			<div class="card-group" data-index="0" data-status="active">
				<div class="little-card card"></div>
				<div class="big-card card"></div>
				<div class="little-card card"></div>
				<div class="big-card card"></div>
				<div class="little-card card"></div>
				<div class="big-card card"></div>
				<div class="little-card card"></div>
				<div class="big-card card"></div>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
	@property --rotate {
		syntax: '<angle>';
		initial-value: 132deg;
		inherits: false;
	}

	#container::after {
		position: absolute;
		left: 0%;
		top: 0%;
		content: '';
		height: 100%;
		width: 100%;
		background-image: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
		background-position: 0% 0%;
		background-size: 5vmin 5vmin;
		z-index: 1;
	}

	.text {
		color: rgba(255, 255, 255, 0.8);
	}

	.card-group,
	.card {
		aspect-ratio: 5 / 7;
		z-index: 10;
	}

	.card-group,
	.big-card {
		width: 40vmin;
	}

	.card-group {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 400ms ease;
		z-index: 10;
	}

	.card {
		position: absolute;
		transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
		background-position: center;
		background-size: cover;
	}

	.big-card {
		border-radius: 1vmin;
	}

	.little-card {
		width: 12vmin;
		border-radius: 2vmin;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		box-shadow: -1vmin 1vmin 2vmin rgba(0, 0, 0, 0.25);
		pointer-events: none;
		position: absolute;
	}

	.big-card:nth-child(2) {
		background-image: url('$lib/assets/images/xbox.jpg');
		transform: translateX(-10%) rotate(-1deg);
	}

	.big-card:nth-child(4) {
		background-image: url('$lib/assets/images/pcGaming.jpg');
		transform: rotate(2deg);
	}

	.big-card:nth-child(6) {
		background-image: url('$lib/assets/images/switch.jpg');
		transform: translateX(-6%) rotate(-3deg);
	}

	.big-card:nth-child(8) {
		background-image: url('$lib/assets/images/ps5.jpg');
		transform: translate(10%, 3%) rotate(5deg);
	}

	.little-card:nth-child(1) {
		background-image: url('$lib/assets/images/pcGame.jpg');
	}

	.little-card:nth-child(3) {
		background-image: url('$lib/assets/images/switchGame.jpg');
	}

	.little-card:nth-child(5) {
		background-image: url('$lib/assets/images/xboxGame.jpg');
	}

	.little-card:nth-child(7) {
		background-image: url('$lib/assets/images/ps5Game.jpg');
	}

	.card-group:hover > .card {
		box-shadow: -2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4);
	}

	.card-group:hover > .big-card:nth-child(2) {
		transform: translate(-75%, 16%) rotate(-24deg);
	}

	.card-group:hover > .big-card:nth-child(4) {
		transform: translate(-25%, 8%) rotate(-8deg);
	}

	.card-group:hover > .big-card:nth-child(6) {
		transform: translate(25%, 8%) rotate(8deg);
	}

	.card-group:hover > .big-card:nth-child(8) {
		transform: translate(75%, 16%) rotate(24deg);
	}

	.card-group:hover > .little-card:nth-child(1) {
		transform: translate(505%, -100%) rotate(24deg);
	}

	.card-group:hover > .little-card:nth-child(3) {
		transform: translate(340%, 170%) rotate(24deg);
	}

	.card-group:hover > .little-card:nth-child(5) {
		transform: translate(-610%, -110%) rotate(-24deg);
	}

	.card-group:hover > .little-card:nth-child(7) {
		transform: translate(-450%, 150%) rotate(-24deg);
	}


	@media screen and (max-width:768px){
		.text{
			font-size:1.5rem;
		}
	}
	@media screen and (max-width:425px){
		.text{
			font-size:.9rem;
			display: inline-block;

		}
	}
 
</style>
