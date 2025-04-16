<script lang="ts">
	import Sony from '$lib/assets/images/sony.jpg';
	import SonyLogo from '$lib/assets/svg/playstation-svgrepo-com.svg';
	import Xbox from "$lib/assets/images/xbox.jpg"
	import XboxLogo from "$lib/assets/svg/xbox-svgrepo-com.svg"
	import Steam from "$lib/assets/images/pcGaming1.jpg"
	import SteamLogo from "$lib/assets/svg/steam-svgrepo-com.svg"
	import Nintendo from "$lib/assets/images/nintendo.jpg"
	import NintendoLogo from "$lib/assets/svg/nintendo-2-logo-svgrepo-com.svg"
	import { onMount } from 'svelte';

	let activeIndex: number = 0;
	let slides : any
	onMount(()=>{
		slides = document.getElementsByTagName("article") ;
	})

	function HandleLeftClick() {
		let nextIndex: number = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
		const CurrentSlide = document.querySelector(
			`[data-index = "${activeIndex}"]`
		) as HTMLElement | null;
		let nextSlide = document.querySelector(`[data-index = "${nextIndex}"]`) as HTMLElement;
		if (CurrentSlide) {
			CurrentSlide.dataset.status = 'after';
		}
		if (nextSlide) {
			nextSlide.dataset.status = 'becoming-active-from-before';
		}

		setTimeout(() => {
			nextSlide.dataset.status = 'active';
			activeIndex = nextIndex;
		});
	}

	function HandleRightClick() {
		let nextIndex: number = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
		const CurrentSlide = document.querySelector(
			`[data-index = "${activeIndex}"]`
		) as HTMLElement | null;
		let nextSlide = document.querySelector(`[data-index = "${nextIndex}"]`) as HTMLElement;
		if (CurrentSlide) {
			CurrentSlide.dataset.status = 'after';
		}
		if (nextSlide) {
			nextSlide.dataset.status = 'becoming-active-from-before';
		}

		setTimeout(() => {
			nextSlide.dataset.status = 'active';
			activeIndex = nextIndex;
		});
	}
</script>

<section class="relative h-dvh w-full overflow-hidden">
	<article class="main-container" data-index="0" data-status="active">
		<div class="section-element" id="image-section">
			<img src={Sony} alt="" class="h-full w-full object-cover" />
		</div>
		<div class="section-element" id="desc-section">
			<p class="px-4 text-lg font-bold text-gray-100 ">
				Dive into the captivating world of Sony games, where exceptional storytelling meets
				cutting-edge graphics. Experience unforgettable adventures with critically acclaimed titles
				like "The Last of Us Part II," where intense narratives and emotional depth keep you on the
				edge of your seat.
			</p>
		</div>
		<div class="section-element" id="title-icon-section">
			<div id="wrapper" class="mx-auto flex h-full w-[95%] items-center justify-between">
				<h1 id="title-main" class="text-3xl font-bold">Unlock Epic Adventures with Sony Games</h1>
				<a href="/Sony">
					<img src={SonyLogo} alt="" class="aspect-square h-24 object-cover" />
				</a>
			</div>
		</div>
		<div class="section-element" id="navigation-section">
			<div id="btn-wrapper" class="mx-auto flex h-full w-[95%] items-center justify-between">
				<div id="left-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleLeftClick} class=" group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:-translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-left"></i></span
						>
					</button>
				</div>
				<div id="right-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleRightClick} class="group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-right"></i></span
						>
					</button>
				</div>
			</div>
		</div>
	</article>
	<article class="main-container" data-index="1" data-status="inactive">
		<div class="section-element" id="image-section">
			<img src={Xbox} alt="" class="h-full w-full object-cover" />
		</div>
		<div class="section-element" id="desc-section">
			<p class="px-4 text-lg font-bold text-gray-100">
				Dive into the captivating world of Sony games, where exceptional storytelling meets
				cutting-edge graphics. Experience unforgettable adventures with critically acclaimed titles
				like "The Last of Us Part II," where intense narratives and emotional depth keep you on the
				edge of your seat.
			</p>
		</div>
		<div class="section-element" id="title-icon-section">
			<div class="mx-auto flex h-full w-[95%] items-center justify-between">
				<h1 id="title-main" class="text-3xl font-bold">Unlock Epic Adventures with Sony Games</h1>
				<a href="/Xbox">
					<img src={XboxLogo} alt="" class="aspect-square h-24 object-cover" />
				</a>
			</div>
		</div>
		<div class="section-element" id="navigation-section">
			<div id="btn-wrapper" class="mx-auto flex h-full w-[95%] items-center justify-between">
				<div id="left-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleLeftClick} class=" group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:-translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-left"></i></span
						>
					</button>
				</div>
				<div id="right-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleRightClick} class="group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-right"></i></span
						>
					</button>
				</div>
			</div>
		</div>
	</article>
	<article class="main-container" data-index="2" data-status="inactive">
		<div class="section-element" id="image-section">
			<img src={Nintendo} alt="" class="h-full w-full object-cover" />
		</div>
		<div class="section-element" id="desc-section">
			<p class="px-4 text-lg font-bold text-gray-100">
				Dive into the captivating world of Sony games, where exceptional storytelling meets
				cutting-edge graphics. Experience unforgettable adventures with critically acclaimed titles
				like "The Last of Us Part II," where intense narratives and emotional depth keep you on the
				edge of your seat.
			</p>
		</div>
		<div class="section-element" id="title-icon-section">
			<div class="mx-auto flex h-full w-[95%] items-center justify-between">
				<h1 id="title-main" class="text-3xl font-bold">Unlock Epic Adventures with Sony Games</h1>
				<a href="/Nintendo">
					<img src={NintendoLogo} alt="" class="aspect-square h-24 object-cover" />
				</a>
			</div>
		</div>
		<div class="section-element" id="navigation-section">
			<div id="btn-wrapper" class="mx-auto flex h-full w-[95%] items-center justify-between">
				<div id="left-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleLeftClick} class=" group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:-translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-left"></i></span
						>
					</button>
				</div>
				<div id="right-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleRightClick} class="group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-right"></i></span
						>
					</button>
				</div>
			</div>
		</div>
	</article>
	<article class="main-container" data-index="3" data-status="inactive">
		<div class="section-element" id="image-section">
			<img src={Steam} alt="" class="h-full w-full object-cover" />
		</div>
		<div class="section-element" id="desc-section">
			<p class="px-4 text-lg font-bold text-gray-100">
				Dive into the captivating world of Sony games, where exceptional storytelling meets
				cutting-edge graphics. Experience unforgettable adventures with critically acclaimed titles
				like "The Last of Us Part II," where intense narratives and emotional depth keep you on the
				edge of your seat.
			</p>
		</div>
		<div class="section-element" id="title-icon-section">
			<div class="mx-auto flex h-full w-[95%] items-center justify-between">
				<h1 id="title-main" class="text-3xl font-bold">Unlock Epic Adventures with Sony Games</h1>
				<a href="/Steam">
					<img src={SteamLogo} alt="" class="aspect-square h-24 object-cover" />
				</a>
			</div>
		</div>
		<div class="section-element" id="navigation-section">
			<div id="btn-wrapper" class="mx-auto flex h-full w-[95%] items-center justify-between">
				<div id="left-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleLeftClick} class=" group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:-translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-left"></i></span
						>
					</button>
				</div>
				<div id="right-btn" class="flex h-full w-full items-center justify-center">
					<button on:click={HandleRightClick} class="group btn-block text-5xl font-thin">
						<span class="block transition-all group-hover:translate-x-6 group-hover:text-gray-500"
							><i class="fa-solid fa-arrow-right"></i></span
						>
					</button>
				</div>
			</div>
		</div>
	</article>
</section>

<style lang="postcss">
	article {
		position: absolute;
		left: 0;
		top: 0;
		transition: all 500ms ease;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 2fr 1fr;
		overflow: hidden;
		border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
	}

	.section-element {
		height: 100%;
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.section-element:nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
	}
	.section-element:nth-child(3) , #left-btn {
		border-right: 1px dashed rgba(255, 255, 255, 0.5);
	}

	section > article[data-status='inactive'] {
		transform: translateX(100%);
		transition: none;
	}

	section > article[data-status='active'] {
		transform: translateX(0%);
	}

	section > :global(article[data-status='before']) {
		transform: translateX(-100%);
	}

	section > :global(article[data-status='after']) {
		transform: translateX(100%);
	}

	section > :global(article[data-status='becoming-active-from-before']) {
		transform: translateX(100%);
		transition: none;
	}

	section > :global(article[data-status='becoming-active-from-after']) {
		transform: translateX(100%);
		transition: none;
	}


	@media screen and (max-width: 768px){
		#title-main{
			font-size: 1.5rem;
		}

		section{
			height: 1000px;
		}
		article {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
		.section-element{
			height: 100%;
			width: 100%;
		}

		#navigation-section{
			border-top:1px dashed rgba(255, 255, 255, 0.5);
		}

		#btn-wrapper{
			height: 150px;
		}
		#desc-section{
			height: 600px;
		}
		
		p{
			font-size: 1.2rem;
		}
		#title-icon-section{
			height: 500px;
			border-right: none;
		}

		#navigation-section{
			height: 400px;
			display: flex;
			align-items: center;
		}
	}

	@media screen and (max-width: 425px){
		#title-main{
			font-size: 1rem;
		}

		section{
			height: 1000px;
		}
		article {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
		.section-element{
			height: 100%;
			width: 100%;
		}

		#navigation-section{
			border-top:1px dashed rgba(255, 255, 255, 0.5);
		}

		#btn-wrapper{
			height: 150px;
		}
		#desc-section{
			height: 400px;
		}
		
		p{
			font-size: 1rem;
		}
		#title-icon-section{
			height: 300px;
			border-right: none;
		}
		#title-icon-section > #wrapper > a > img {
			height: 80px;
		}
		#title-icon-section > #wrapper > h1 {
			font-size: .9rem;
		}

		#navigation-section{
			height: 200px;
			display: flex;
			align-items: center;
		}
	}


</style>
