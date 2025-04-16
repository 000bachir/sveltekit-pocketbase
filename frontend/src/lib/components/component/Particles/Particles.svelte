<script lang="ts">
    import { onMount } from "svelte";
    import {loadSlim} from "tsparticles-slim"

    let ParticlesComponents:any

    onMount(async()=>{
        const module = await import ("svelte-particles")
        ParticlesComponents = module.default
    })

    let particeConfig = {
        fps_limit : 120 ,
        interactity : {
            detect_on : "canvas",
            events : {
                resize : true
            }
        },
        particles : {
            color : {value : "#fff"},
            move : {
                bounce : true,
                direction : 'bottom left right top ',
                enable : true,
                out_mode : "out",
                random : true , 
                size : true ,
                speed : 2,
                straight : false
            },
            number : {density : {enable : true , value_area :300},value : 100},
            opacity : {
                anim : {
                    enable : false ,
                    opacity_min : 0.1,
                    speed : 1 ,
                    sync : false
                },
                random : true,
                value : 0.75
            },
            shape : {
                type : "star"
            },
            size: {
                random : true,
                value : 3
            }
        },
        detect_retina : true,
        pause_on_outside_viewport : true

    }

    let onParticleload = (event:any) =>{
        const particeContainer = event.detail.particles
    }
    let particlesInit = async (engine:any) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    };

</script>



<svelte:component 
this = "{ParticlesComponents}"
id = "tsParticles"
class="snow"
options = "{particeConfig}"
on:particlesLoaded = "{onParticleload}"
particlesInit="{particlesInit}"

/>

<style lang="postcss">
    :global(#tsParticles){
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: url('');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        pointer-events: none;
        overflow: hidden;
    }
</style>