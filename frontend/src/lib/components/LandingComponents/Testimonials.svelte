<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';
    import PeopleTestimonials from "../component/Testimonials/PeopleTestimonials.svelte";

    function WordAppearing(){
        gsap.registerPlugin(ScrollTrigger)
        let words = gsap.utils.toArray(".word-testimonials")
        let startingPoint  = document.getElementById("wrapper-text") as HTMLElement
        return gsap.fromTo(words , {
            opacity : 0,
            scale : 0 ,
            filter : "blur(100px)"
        },{
            scrollTrigger : {
                trigger : startingPoint,
                start : "top top ",
                scrub : 1.9 , 
                end : "bottom bottom"
            },
            opacity : 1,
            scale : 1 ,
            filter : "blur(0px)",
            duration : 1.5 ,
            ease : "power1.inOut",
            stagger : .2
        })
    }

    function barAppearing(){
        let bars = gsap.utils.toArray(".bars")
        let startingPoint  = document.getElementById("wrapper-text") as HTMLElement
        gsap.registerPlugin(ScrollTrigger)

        return gsap.fromTo(bars , {
            width : "0%"
        },{
            scrollTrigger : {
                trigger : startingPoint,
                start : "top top ",
                scrub : 1.9 , 
                end : "bottom bottom"
            },
            width : "100%",
            duration : 1.5,
            stagger : 1,
            ease : "elastic.inOut"
        })
    }

    function WordAppear() {
		gsap.registerPlugin(ScrollTrigger);
		let feedbackWords = gsap.utils.toArray('.feedback');
		const feedbackWordsTrigggerContainer = document.getElementById('text-wrapper') as HTMLElement;
		return gsap.fromTo(
			feedbackWords,
			{
				opacity: 0,
				yPercent: -100,
				scale: 0,
			},
			{
				scrollTrigger: {
					trigger: feedbackWordsTrigggerContainer,
					start: 'top top ',
					scrub: 1.9,
					end: 'bottom bottom',
					snap: {
						snapTo: 'labels'
					}
				},
				opacity: 1,
				yPercent: 0,
				scale: 1,
                duration : 1.1 , 
                stagger : 0.9
			}
		);
	}

	



    onMount(()=>{
        const timeline = gsap.timeline()
        timeline.add(WordAppearing()).add(barAppearing(), '+=0.05'); // Adjust delay as needed
        WordAppear()
    })
    

    // onDestroy(()=>{
    //     const timeline = gsap.timeline()
    //     timeline.add(WordAppearing()).add(barAppearing(), '+=0'); // Adjust delay as needed
    // })

</script>



<section id="primary-container" class="h-dvh w-full relative overflow-hidden  grid grid-cols-2 pb-4 pt-4">
    <div class="col-span-1 h-full w-full relative">
        <div id="wrapper-text" class="h-full w-[95%] mx-auto relative ">
            <h1 id="primary-text" class="flex flex-col text-7xl items-start justify-evenly h-full">
                <span class="font-bold uppercase">Our</span>
                <span class="font-bold uppercase">Goal</span>
                <span class="word-testimonials ">Is</span>
                <span class="word-testimonials ">To</span>
                <span class="word-testimonials ">Make</span>
                <span class="word-testimonials ">Our</span>
                <span class="word-testimonials ">Customers</span>
                <span class="word-testimonials ">Satisfied</span>
            </h1>
    
        </div>
    </div>
    <div id="stats" class="col-span-1  h-full w-full relative overflow-hidden flex flex-wrap justify-center items-center">

        <div id="stats-container" class="h-full w-[95%] mx-auto relative flex flex-col flex-wrap justify-center items-center gap-4">
            <div class="flex h-24 flex-col gap-2 justify-start  w-full pb-4">
                <h1 class="text-2xl font-thin text-left">Efficiency</h1>
                <div class="bars h-10 rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl w-full "></div>
            </div>

            <div class="flex h-24 flex-col gap-2 justify-start  w-full pb-4">
                <h1 class="text-2xl font-thin">Availability</h1>
                <div class="bars h-10 rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl w-full pb-2 "></div>
            </div>

            <div class="flex h-24 flex-col gap-2 justify-start  w-full pb-4">
                <h1 class="text-2xl font-thin">Trustworthiness</h1>
                <div class="bars h-10 rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl w-full pb-2 "></div>
            </div>

        </div>

    </div>

</section>



<section class="relative flex h-[30rem] w-full items-center justify-center ">
	<div id="text-wrapper" class=" flex h-full w-[80%] items-center justify-center rounded-2xl">
		<h1 id="secondary-text" class="text-balance text-center text-[5rem] font-bold text-black ">
			<span class="feedback inline-block">Don’t</span>
			<span class="feedback inline-block">take</span>
			<span class="feedback inline-block">our</span>
			<span class="feedback inline-block">word</span>
			<span class="feedback inline-block">for</span>
			<span class="feedback inline-block">it</span>
			<span class="feedback inline-block">.</span>
			<span class="feedback inline-block">Take</span>
			<span class="feedback inline-block">Theirs</span>
		</h1>
	</div>
</section>

<section class="h-auto w-full relative overflow-hidden">
    <PeopleTestimonials />
</section>



<style lang="postcss">
    .bars{
        background: linear-gradient(To right , #2E3192 , #1BFFFF);
    }
    .feedback{
		color:#eee;
	}
    @media screen and (max-width:768px){
        #primary-text{
            font-size: 2.5rem;
        }
    }
    @media screen and (max-width:425px){
        #primary-container{
            height: 900px;
            display: flex;
            flex-direction: column;
        }
        #primary-text{
            font-size: 3rem;
        }
        #secondary-text{
            font-size: 3rem;
        }
    }
</style>