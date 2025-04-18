<script lang="ts">
    import loginImage from "$lib/assets/Imgs/image01.webp"


    export let form;
</script>


<svelte:head>
    <title>Login</title>
</svelte:head>


<main class="h-auto w-full relative">
    <article class="h-32 w-full flex items-center justify-center">
        <h1 class="text-3xl text-white underline-offset-1 tracking-wider font-semibold ">Login to your acount</h1>
    </article>
    <article class='h-[27rem] w-full  grid grid-cols-2'>
        <!--form section-->
        <section class="h-full w-full overflow-hidden flex items-center justify-center col-span-1">
            <form action="?/login" method="POST" class="h-full w-full flex items-center justify-center flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <label for="Email">Email</label>
                    <input type="text" placeholder="Email" class="input input-success input-lg" required />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" class="input input-success input-lg" required />
                </div>
                <div class="flex items-center justify-center gap-4 ">
                    <button class="btn btn-success btn-md text-xl font-semibold tracking-wide">
                        Login
                    </button>
                    <a href="/Register/reset-password">                    
                        <button class="btn btn-success btn-md text-xl font-semibold tracking-wide">
                            reset-password
                        </button>
                    </a>
                </div>
                {#if form?.notVerified}
                    <div class="alert alert-error shadow-lg w-full max-w-md">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >
                            <span>You must verify your email before you can login.</span>
                        </div>
                    </div>
                {/if}
            </form>



        </section>
        <!--image section-->
        <section class="h-full w-full overflow-hidden flex items-center justify-center col-span-1">
            <div class=" h-80 aspect-square overflow-hidden relative rounded-full">
                <img src={loginImage} loading="lazy" class="h-full m-auto w-full object-cover" alt="">
            </div>
        </section>
    </article>
</main>

<style>

</style>