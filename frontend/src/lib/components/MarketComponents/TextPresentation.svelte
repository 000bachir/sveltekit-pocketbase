<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";


    function WordAppear(){
        let TextWrapper = document.getElementById("text-wrapper") as HTMLElement
        let word = gsap.utils.toArray(".word")
        gsap.fromTo(word , {
				opacity: 0,
				scale: 0.5
			},
			{
				scrollTrigger: {
					trigger: TextWrapper,
					scrub: 1.9,
					end: 'bottom bottom' // This ensures the animation stops at the bottom of the trigger
				},
				duration: 1,
				opacity: 1,
				scale: 1,
				stagger: 1
			})
        

    }

    onMount(()=>{
        WordAppear()
    })

</script>


<div id="text-wrapper" class="h-56 w-full relative">
    <div id="container" class="h-full w-[95%] mx-auto flex items-center justify-center">
        <h1 class="font-bold text-4xl uppercase" id='fancy'>
            <span class="word">To</span> <span class="word">our</span> <span class="word">magnificent</span> <span class="word">and</span> <span class="word">mysterious</span> <span class="word">library</span>
        </h1>
    </div>
</div>

<style lang="postcss">
    @media screen and (max-width: 768px){
        #fancy{
            font-size: 3rem;
            text-align: center;
            text-wrap: balance;
            line-height: 3rem;
        }
    }
    @media screen and (max-width: 425px){
        #fancy{
            font-size: 2rem;
            text-align: center;
            text-wrap: balance;
            line-height: 3rem;
        }
    }
</style>