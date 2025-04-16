<script lang="ts">
    import { onMount } from 'svelte';
    import Welcome from '$lib/components/MarketComponents/Welcome.svelte';
	import Redirect from '$lib/components/MarketComponents/Redirect.svelte';
    import TextPresentation from '$lib/components/MarketComponents/TextPresentation.svelte';
    import CardPresentation from '$lib/components/MarketComponents/CardPresentation.svelte';

</script>

<svelte:head>
    <title>Market</title>
</svelte:head>

<main class="h-auto w-full relative overflow-hidden">
    <Welcome />
    <TextPresentation />
    <CardPresentation />
    <Redirect />
</main>

<style lang="postcss">

</style>