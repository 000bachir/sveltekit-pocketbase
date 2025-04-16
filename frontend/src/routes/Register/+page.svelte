<script lang="ts">
	import signIN from '$lib/assets/Imgs/signIn.webp';
	import Register from '$lib/assets/Imgs/team.webp';
	import ResetPassword from '$lib/assets/Imgs/image03.webp';
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<main class="relative mx-auto h-auto w-[95%] overflow-hidden">
	<article class="flex h-32 w-full items-center justify-center">
		<h1 class="text-3xl font-semibold text-white underline">User inscreption level</h1>
	</article>
	<article class="relative flex h-96 w-full flex-wrap items-center justify-evenly">
		<a href="/sign-in">
			<div
				class="relative flex aspect-square h-80 w-60 items-center justify-center overflow-hidden rounded-lg border-[1px] border-white shadow-2xl"
			>
				<img
					src={Register}
					loading="lazy"
					class=" absolute left-0 top-0 m-auto h-full object-cover grayscale transition-all hover:grayscale-0"
					alt=""
				/>
				<h1 class="absolute text-center text-2xl font-semibold text-orange-500">Register</h1>
			</div>
		</a>

		<a href="/Register/login">
			<div
				class="relative flex aspect-square h-80 w-60 items-center justify-center overflow-hidden rounded-lg border-[1px] border-white shadow-2xl"
			>
				<img
					src={signIN}
					loading="lazy"
					class="absolute left-0 top-0 m-auto h-full object-cover grayscale transition-all hover:grayscale-0"
					alt=""
				/>
				<h1 class="absolute text-center text-2xl font-semibold text-orange-500">Login</h1>
			</div>
		</a>
		<a href="/reset-password">		
			<div
				class="relative flex aspect-square h-80 w-60 items-center justify-center overflow-hidden rounded-lg border-[1px] border-white shadow-2xl"
			>
				<img
					src={ResetPassword}
					loading="lazy"
					class="absolute left-0 top-0 m-auto h-full object-cover grayscale transition-all hover:grayscale-0"
					alt=""
				/>
				<h1 class="absolute text-center text-2xl font-semibold text-orange-500">Reset Password</h1>
			</div>
		</a>
	</article>
</main>
