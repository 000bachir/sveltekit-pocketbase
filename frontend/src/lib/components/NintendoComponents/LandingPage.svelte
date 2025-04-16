<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	let textOne: string = 'Nintendo';
	let textTwo: string = 'World';

	function firstWordEffectAppearing() {
		gsap.utils.toArray('.letter');
		return gsap.fromTo(
			'.letter',
			{
				opacity: 0,
				scale: 1.2,
				filter: 'blur(50px)'
			},
			{
				opacity: 1,
				scale: 1,
				duration: 0.5,
				stagger: 0.25,
				filter: 'blur(0px)',
				ease: 'power1.inOut'
			}
		);
	}
	function secondWordEffectAppearing() {
		gsap.utils.toArray('.second-letter');
		return gsap.fromTo(
			'.second-letter',
			{
				opacity: 0,
				scale: 1.2,
				filter: 'blur(50px)'
			},
			{
				opacity: 1,
				scale: 1,
				duration: 0.5,
				stagger: 0.25,
				filter: 'blur(0px)',
				ease: 'power1.inOut'
			}
		);
	}
	onMount(() => {
		const TimeLine = gsap.timeline();
		TimeLine.add(firstWordEffectAppearing()).add(secondWordEffectAppearing(), '+=0'); // Adjust delay as needed
	});
</script>

<div id="container" class="relative h-dvh w-full overflow-hidden bg-[#e60012]">
	<div id="logo" class="flex h-full w-full flex-col items-center justify-center overflow-hidden">
		<div id="pads" class="relative flex h-auto w-auto items-center justify-center gap-4">
			<div id="left-pad-switch" class="relative h-96 w-36 border-[25px] border-white"></div>
			<div id="right-pad-switch" class="relative h-96 w-36 bg-white"></div>
		</div>
		<div id="text" class=" flex w-[50%] items-center justify-center gap-2">
			<h1 class="text-[80px] font-thin uppercase">
				<!-- <span>Nintendo</span> -->
				{#each textOne as letter}
					<span class="letter">{letter}</span>
				{/each}
			</h1>
			<h1 class="text-[80px] font-thin uppercase">
				{#each textTwo as letter}
					<span class="second-letter">{letter}</span>
				{/each}
			</h1>
		</div>
	</div>
</div>

<style lang="postcss">
	#left-pad-switch {
		border-radius: 100px 5px 5px 100px;
		animation: logo-icon 2s linear infinite;
		animation-delay: 2s; /* Delays the start of logo-icon animation by 2 seconds */
	}
	#left-pad-switch::before {
		position: absolute;
		content: '';
		height: 50px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: #fff;
		top: 25%;
		left: 30%;
		transform: translate(-15%, -30%);
	}
	#right-pad-switch {
		border-radius: 5px 100px 100px 5px;
		animation: logo-right 2s linear infinite;
	}
	#right-pad-switch::before {
		position: absolute;
		content: '';
		height: 50px;
		aspect-ratio: 1;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 90%);
		background: #e60012;
	}

	@keyframes logo-right {
		0% {
			transform: translateY(-40%);
		}
		25% {
			transform: translateY(-50%);
		}
		30% {
			transform: translateY(0);
		}
		70% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-40%);
		}
	}
	@keyframes logo-icon {
		0% {
			transform: translateY(0);
		}
		30% {
			transform: translateY(0);
		}
		35% {
			transform: translateY(10%);
		}
		40% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
