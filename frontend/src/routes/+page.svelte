<script lang='ts'>
	import Features from "$lib/components/LandingComponents/Features.svelte";
    import Hero from "$lib/components/LandingComponents/Hero.svelte";
	import Intro from "$lib/components/LandingComponents/Intro.svelte";
	import Redirect from "$lib/components/LandingComponents/Redirect.svelte";
	import Testimonials from "$lib/components/LandingComponents/Testimonials.svelte";
</script>


<svelte:head>
    <title>GameLand</title>
</svelte:head>


<main class="h-full w-full relative">
    <div id="container" class="h-full w-full relative mx-auto flex flex-col">
        <Hero />
        
        <section class="h-auto w-full relative">
	        <Intro />
	        <Features />
            <Testimonials />
	        <Redirect />
        </section>
    </div>
</main>