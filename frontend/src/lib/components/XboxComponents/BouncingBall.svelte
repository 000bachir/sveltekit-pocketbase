<script lang="ts">
	import { onMount } from 'svelte';
	import XboxLogo from '$lib/assets/svg/xbox-svgrepo-com.svg';

	onMount(() => {
		const test = document.getElementById('test') as HTMLElement;
		const rect = test.getBoundingClientRect();
		if (!test || !test.parentNode || !(test.parentNode instanceof Element)) {
			throw new Error('Test element or its parent is not found or not an Element.');
		}
		const rectBox = (test.parentNode as Element).getBoundingClientRect();
		const xMax = rectBox.width + rectBox.x - rect.width;
		const yMax = rectBox.height + rectBox.y - rect.height;
		const maxSpeed = 2;

		let x = rect.x;
		let y = rect.y;
		let xDelta: number;
		let yDelta: number;

		setSpeed();
		test.addEventListener('click', setSpeed);
		window.requestAnimationFrame(move);
		test.classList.toggle('move', true);

		function move(timestamp: number) {
			x = x + xDelta;
			y = y + yDelta;
			if (x < rectBox.x || x > xMax) {
				xDelta = -xDelta;
				x = x < rectBox.x ? rectBox.x : xMax;
			}
			if (y < rectBox.y || y > yMax) {
				yDelta = -yDelta;
				y = y < rectBox.y ? rectBox.y : yMax;
			}

			test.style.left = x + 'px';
			test.style.top = y + 'px';
			window.requestAnimationFrame(move);
		}

		function setSpeed() {
			xDelta = rand(-maxSpeed, maxSpeed);
			yDelta = rand(-maxSpeed, maxSpeed);
		}

		function rand(min: number, max: number): number {
			return Math.random() * (max - min + 1) + min;
		}
	});
</script>

<section
	id="box"
	class="relative flex h-dvh  w-full items-center justify-center overflow-hidden bg-white"
>
	<div id="test" class="absolute aspect-square h-40 overflow-hidden rounded-full">
		<img src={XboxLogo} alt="" class="h-full w-full object-contain" />
	</div>
</section>

<style lang="postcss">
	:global(.move) {
		margin: 0;
		position: absolute;
	}
</style>
