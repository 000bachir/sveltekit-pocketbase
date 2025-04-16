<script lang="ts">
	import Image01 from "../../assets/images/halo.jpg"
	import Image02 from "../../assets/images/image02.jpg"
	import Image03 from "../../assets/images/image03.jpg"
	import Image04 from "../../assets/images/spiderman.jpg"
</script>



<section id="main-card-section" class="h-dvh w-full relative flex items-center justify-center overflow-hidden">
	<div id="list" class="h-[90%] w-[90%]  overflow-hidden flex items-center justify-center gap-2 md:flex-wrap ">
		<div class="item w-[40vmin] h-72 rounded-xl shadow-lg relative"><img src={Image01} class="h-full w-full object-cover rounded-xl" alt="" /> </div>
		<div class="item w-[40vmin] h-72 rounded-xl shadow-lg relative"><img src={Image02} class="h-full w-full object-cover rounded-xl" alt="" /> </div>
		<div class="item w-[40vmin] h-72 rounded-xl shadow-lg relative"><img src={Image03} class="h-full w-full object-cover rounded-xl" alt="" /> </div>
		<div class="item w-[40vmin] h-72 rounded-xl shadow-lg relative"><img src={Image04} class="h-full w-full object-cover rounded-xl" alt="" /> </div>
	</div>
</section>


<style lang="postcss">

	#list{
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	#list .item{
		filter: brightness(0.1);
		transition: all 500ms ease-in-out;
	}

	#list .item:hover{
		filter: brightness(1);
		transform: translateZ(100px);
	}
	#list .item:hover + *{
		filter: brightness(0.6);
		transform: translateZ(80px) rotateY(40deg);
	}
	#list .item:hover + * + *{
		filter: brightness(0.4);
		transform: translateZ(60px) rotateY(20deg);
	}
	#list .item:hover + * + * + *{
		filter: brightness(0.2);
		transform: translateZ(40px) rotateY(10deg);
	}

	#list .item:has(+ *:hover){
		filter: brightness(0.6);
		transform: translateZ(80px) rotateY(-40deg);
	}
	#list .item:has(+ * + *:hover){
		filter: brightness(0.6);
		transform: translateZ(80px) rotateY(-20deg);
	}
	#list .item:has(+ * + * + *:hover){
		filter: brightness(0.2);
		transform: translateZ(80px) rotateY(-10deg);
	}
	@media screen and (max-width:768px){
		#main-card-section{
			height: 1000px;
			width: 100%;
		}
		#list{
			display: flex;
			flex-wrap: wrap;
		}
	}

	@media screen and (max-width:425px){
		#main-card-section{
			height: 800px;
			width: 100%;
		}
		#list{
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>