<script lang="ts">
	import HeaderImage from '$lib/assets/Imgs/header_img01.webp';
	import Image from '$lib/assets/Imgs/switchGame.webp';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	//Header function
	function Header() {
		gsap.registerPlugin(ScrollTrigger);
		const GsapTimeline = gsap.timeline();
		const Header = document.getElementById('header') as HTMLElement;
		GsapTimeline.from('#title', 1, {
			opacity: 0,
			yPercent: 130,
			stagger: 0.06,
			ease: 'back.inOut'
		});
		GsapTimeline.to(
			'#header_img',
			2,
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				scale: 1,
				ease: 'expo.out'
			},
			'-==1'
		);

		gsap.to('#title_parralex', {
			scrollTrigger: {
				trigger: Header,
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -150
		});

		gsap.to('#header #stroke', {
			scrollTrigger: {
				trigger: Header,
				scrub: 1.9,
				start: 'top top'
			},
			xPercent: 50
		});

		gsap.to('#header_img', {
			scrollTrigger: {
				trigger: Header,
				start: 'top top',
				scrub: 1.9
			},
			yPercent: -50
		});
		gsap.to('#header_img img', {
			scrollTrigger: {
				trigger: Header,
				start: 'top top',
				scrub: 1.9
			},
			scale: 1.3
		});
	}

	onMount(() => {
		Header();
	});

	function About() {
		const About = document.getElementById('about');
		gsap.from('#about_image', {
			scrollTrigger: {
				trigger: About,
				start: 'top bottom',
				scrub: 1.9
			},
			xPercent: 80
		});
		gsap.to('#about_image img', {
			scrollTrigger: {
				trigger: About,
				start: 'top bottom',
				scrub: 1.9
			},
			scale: 1.6
		});
		gsap.to('#about_text', {
			scrollTrigger: {
				trigger: '#about-wrapper',
				start: 'top bottom',
				scrub: 1.9
			},
			xPercent: 0
		});
	}

	onMount(() => {
		About();
	});
</script>

<main class="relative h-auto w-full overflow-hidden">
	<!--TODO: header section-->

	<header id="header" class="relative flex h-dvh w-full items-center justify-center px-16 py-0">
		<h1
			class="relative z-[2] m-0 text-center text-7xl uppercase text-teal-50 mix-blend-difference md:text-5xl"
			id="title"
			data-splitting
		>
			<span class="inline-block will-change-transform" id="title_parralex">
				Welcome to a whole new realm
			</span>
			<span id="stroke" class="text-stroke inline-block text-transparent">In GameLand City</span>
		</h1>
		<div id="header_img" class="clip-path absolute right-36 top-0 h-full w-[45%] overflow-hidden">
			<img src={HeaderImage} class="block h-full w-full object-cover" alt="" />
		</div>
	</header>

	<!--!Fist section -->

	<section class="relative h-dvh w-full">
		<div id="about-wrapper" class="relative flex h-full w-full overflow-hidden">
			<div id="about_image" class="relative h-full w-[40%] rounded-lg overflow-hidden">
				<img src={Image} class="absolute h-full w-full object-contain rounded-lg" alt="" />
			</div>
			<div
				id="about_text"
				class="absolute left-1/2 top-1/2 z-20 flex h-full w-[50%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly overflow-hidden"
			>
				<h2
					id="section-title"
					class="relative text-center uppercase text-gray-50 mix-blend-difference md:text-5xl lg:text-7xl"
				>
					WHE<span id="stroke" class="text-stroke text-transparent">RE</span>
					<span
						id="section-title__square"
						class="absolute left-1/2 top-1/2 z-[-1] inline-block aspect-square w-32 -translate-x-1/2 -translate-y-1/2 border-[1px] border-white"
					></span>
				</h2>
				<p
					id="about_p"
					class="text-pretty font-bold text-gray-400 mix-blend-difference md:px-5 md:text-base lg:px-10 lg:text-xl will-change-transform"
				>
					Your ultimate destination for all things gaming! Dive into a world of excitement and
					adventure with our extensive collection of video games, catering to every gamer's taste
					and platform preference. From action-packed thrillers to immersive role-playing epics,
					we've curated a diverse selection that promises endless entertainment.
				</p>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
	@media screen and (max-width: 768px){
		#title{
			font-size: 3rem;
		}
	}

	@media screen and (max-width:425px){
		#about_p{
			font-size: .6rem;
		}
	}
</style>
