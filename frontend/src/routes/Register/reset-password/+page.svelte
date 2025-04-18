<script lang="ts">
    import type { PageData } from './$types';
    import ResetPasswordImage from "$lib/assets/Imgs/halo.webp"
    export let data 
    export let form
</script>

<svelte:head>
    <title>reset-password</title>
</svelte:head>

<main class="h-auto w-full relative overflow-hidden">
    <article class="h-32 w-full flex flex-col items-center justify-center gap-4">
        <h1 class="text-xl font-semibold tracking-wide text-green-600 uppercase">forgot your password</h1>
        <p class="text-xl font-semibold tracking-wide text-green-600">don't you worry we've got you just clear out this and we will send you an email</p>
    </article>
    <article class='h-[30rem] w-full relative grid grid-cols-2'>
        <section class="h-full w-full col-span-1 flex items-center justify-center">
            <form action="?/resetPassword" method="POST" class="h-full w-full flex items-center justify-center flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <label for="Email">Email</label>
                    <input type="text" placeholder="Email" class="input input-success input-lg" required />
                </div>
                
                <div class="flex ">
                    <button type="submit" class="btn btn-success btn-md text-xl font-semibold tracking-wide">
                        reset-password
                    </button>
                </div>

                {#if form?.success}
                    <div class="alert alert-success shadow-lg w-full max-w-md">
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
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >
                            <span>An email has been sent to reset your password!</span>
                        </div>
                    </div>
                {/if}

            </form>
        </section>
        <section class="h-full w-full col-span-1 flex items-center justify-center">
            <div class=" h-96 aspect-square overflow-hidden relative rounded-full">
                <img src={ResetPasswordImage} loading="lazy" class="h-full m-auto w-full object-cover" alt="">
            </div>
        </section>
    </article>
</main>