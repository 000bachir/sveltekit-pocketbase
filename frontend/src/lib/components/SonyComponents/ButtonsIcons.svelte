<!--TODO : ADD some product-->


<script lang="ts">
	import { onMount } from 'svelte';
	import { ApplyingAnimation } from '../../components/SonyComponents/index';

	onMount(() => {
		const AllElements = document.querySelectorAll('.shape-icon') as NodeListOf<Element>;
		AllElements.forEach((element: any, index: number) => {
			element.style.transitionDelay = `${index * 50}ms`;
			ApplyingAnimation(element, 5000, 10000);
		});
	});
</script>

<div class="relative flex h-dvh w-full items-center justify-center">
	<ul
		id="wrapper"
		class="relative mx-auto my-0 flex h-[25vw] w-[25vw] flex-wrap items-center justify-center"
	>
		<span
			id="triangle"
			class="shape-icon relative mx-[1vh] my-0 inline-block aspect-square h-[10vw] scale-100"
			data-animate="false"
		></span>
		<span
			id="circle"
			class="shape-icon relative mx-[1vh] my-0 inline-block aspect-square h-[10vw] scale-100"
			data-animate="false"
		></span>
		<span
			id="cross"
			class="shape-icon relative mx-[1vh] my-0 inline-block aspect-square h-[10vw] scale-100"
			data-animate="false"
		></span>
		<span
			id="square"
			class="shape-icon relative mx-[1vh] my-0 inline-block aspect-square h-[10vw] scale-100"
			data-animate="false"
		></span>
	</ul>
</div>

<style lang="postcss">
	:root {
		--background: #222;
		--icons: #777;
	}

	@keyframes spin {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}

	:global(.animate-spin) {
		animation: spin 1.5s;
	}

	#triangle {
		transform-origin: 50% 60%;
		&:before,
		&:after {
			content: '';
			position: absolute;
			bottom: 0.5vw;
			height: 0;
			width: 0;
			border: 5vw solid transparent;
			border-bottom: 8.65vw solid var(--icons);
			transform: scale(1);
		}
		&:after {
			bottom: -0.85vw;
			transform: scale(0.65);
			border-bottom-color: var(--background);
		}
	}

	#circle {
		border-radius: 5vw;
		border: 1.4vw solid var(--icons);
		box-sizing: border-box;
	}

	#cross {
		&:before,
		&:after {
			content: '';
			position: absolute;
			top: 4.55vw;
			height: 1.2vw;
			width: 100%;
			background: var(--icons);
			transform: scale(1.2) rotate(-45deg);
		}
		&:after {
			transform: scale(1.2) rotate(45deg);
		}
	}

	#square {
		border: 1.4vw solid var(--icons);
		box-sizing: border-box;
	}
</style>
