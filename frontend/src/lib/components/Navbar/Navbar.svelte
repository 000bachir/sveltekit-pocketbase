<script lang="ts">
	import Logo from '$lib/assets/svg/LogoSite.svg';


	function OpenNav(){
		let SideNav = document.getElementById("side-navigation") as HTMLElement
		let openBtn = document.getElementById("open-btn") as HTMLButtonElement
		openBtn.addEventListener("click" , (e:Event)=>{
			if(document.activeElement === e.target){
				SideNav.style.width = "100%"
				SideNav.style.transitionDelay = "500ms"
			}
		})
		console.log("button clicked")
	}
	function CloseNav(){
		let SideNav = document.getElementById("side-navigation") as HTMLElement
		let CloseBtn = document.getElementById("close-btn") as HTMLButtonElement
		CloseBtn.addEventListener("click" , (e:Event)=>{
			if(document.activeElement === e.target){
				SideNav.style.width = "0%"
				SideNav.style.transitionDelay = "500ms"
			}
		})
	}


		


</script>

<nav class="relative mx-auto flex h-full w-[95%] items-center justify-between ">
	<div id="logo-name-side" class="flex items-center">
		<img src={Logo} alt="" class="aspect-square h-16" />
		<a class=" whitespace-nowrap text-xl font-bold  " href="/"
			>GameGeniusHub</a
		>
	</div>

	<div id="links-side" class="">
		<ul class="flex items-center gap-5">
			<a 	id="home"
				href="/"
				class="group flex w-full items-center justify-start gap-3 rounded-lg"
				aria-label="Home"
			>
				<div
					class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
				>
					<span><i class="fa-solid fa-house"></i></span>
				</div>
				<span class="xs:hidden whitespace-nowrap text-lg font-bold ">Home</span>
			</a>
			<a
				href="/Market"
				id="market"
				class=" xs:hidden group flex w-full items-center justify-start gap-3 rounded-lg px-0 sm:px-2 md:hidden lg:flex"
				aria-label="Market"
			>
				<div
					class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
				>
					<span><i class="fa-solid fa-store"></i></span>
				</div>
				<span class="whitespace-nowrap text-lg font-bold sm:inline">Market</span>
			</a>
			<a	
				id='faq'
				href="/FAQ"
				class="xs:hidden group flex w-full items-center justify-start gap-3 rounded-lg md:hidden lg:flex"
				aria-label="Faq"
			>
				<div
					class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
				>
					<span><i class="fa-solid fa-question"></i></span>
				</div>
				<span class="whitespace-nowrap text-lg font-bold sm:inline">Faq</span>
			</a>
			<a
				href="/Register"
				class="group flex w-full items-center justify-start rounded-lg"
				aria-label="sign~in"
				id="sign-in"
			>
				<div
					class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
				>
					<span><i class="fa-solid fa-right-to-bracket"></i></span>
				</div>
				<span class="xs:hidden  text-lg font-bold sm:inline">Sign~in</span>
			</a>
			<button
				class="group flex items-center gap-1 rounded-xl bg-red-300 px-2 py-1 shadow-md transition-all hover:bg-black lg:hidden text-white"
				id="open-btn"
				type="submit"
				on:click={OpenNav}
			>
				<span class="transition-all group-hover:text-white"
					><i class="fa-solid fa-bars-staggered"></i></span
				>
				Menu
			</button>
		</ul>
	</div>
</nav>
<div id="side-navigation" class="absolute left-0 top-0 z-10 h-dvh w-[25%] bg-gray-200 hidden">
	<div id="side-nav-container" class="float-end grid h-full w-[95%] grid-rows-4">
		<div id="logo-part" class="row-span-1 flex items-center gap-8">
			<div class="flex items-center">
				<img src={Logo} alt="" class="aspect-square h-16" />
				<a class="xs:text-sm whitespace-nowrap text-xl font-bold text-black lg:text-xl" href="/">
					GameGeniusHub
				</a>
			</div>
			<div class="">
				<button type="button" class=" h-8 aspect-square rounded-full border-white border-[1px] text-white" id='close-btn' on:click={CloseNav}>
					<span><i class="fa-solid fa-x"></i></span>
				</button>	
			</div>
		</div>

		<div id="link-part" class="row-span-2 flex items-center">
			<ul class="flex h-full flex-col items-center justify-evenly">
				<a
					href="/"
					class="group flex w-full items-center justify-start gap-3 rounded-lg"
					aria-label="Home"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<span><i class="fa-solid fa-house"></i></span>
					</div>
					<span class="xs:hidden whitespace-nowrap text-lg font-bold sm:inline">Home</span>
				</a>
				<a
					href="/Market"
					class=" group flex w-full items-center justify-start gap-3 rounded-lg px-0 md:hidden lg:flex"
					aria-label="Market"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<span><i class="fa-solid fa-store"></i></span>
					</div>
					<span class="text-lg font-bold">Market</span>
				</a>
				<a
					href="/FAQ"
					class="xs:hidden group flex w-full items-center justify-start gap-3 rounded-lg md:hidden lg:flex"
					aria-label="Faq"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<span><i class="fa-solid fa-question"></i></span>
					</div>
					<span class="whitespace-nowrap text-lg font-bold sm:inline">Faq</span>
				</a>
			</ul>
		</div>
		<div id="log-in-part" class="row-span-1 flex items-center">
			<a
				href="/"
				class="group flex w-full items-center justify-start rounded-lg"
				aria-label="sign~in"
			>
				<div
					class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
				>
					<span><i class="fa-solid fa-right-to-bracket"></i></span>
				</div>
				<span class="xs:hidden whitespace-nowrap text-lg font-bold sm:inline">Sign~in</span>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	@media screen and (max-width:1024px){
		#logo-name-side > a {
			font-size:1.2rem;
		}
		#home , #market , #faq , #sign-in {
			font-size:.8rem;
		}
	}
	@media screen and (max-width:768px){
		#home{
			display:none;
		}

		#sign-in{
			margin-right:.5rem;
			font-size :.8rem;
		}

		#open-btn{
			background: #E44D26;  /* fallback for old browsers */
			background: -webkit-linear-gradient(to right, #F16529, #E44D26);  /* Chrome 10-25, Safari 5.1-6 */
			background: linear-gradient(to right, #F16529, #E44D26); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		}
	}
	@media screen and (max-width:425px){
		#home , #market , #faq , #sign-in{
			display:none;
		}
	}

	

</style>
