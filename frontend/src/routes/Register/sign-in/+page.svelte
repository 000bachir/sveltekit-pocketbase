<script lang="ts">
    import type { PageData } from './$types';
    export const data:PageData = ""

    import Register from '$lib/assets/Imgs/team.webp';
    import signIN from '$lib/assets/Imgs/signIn.webp';
	import ResetPassword from '$lib/assets/Imgs/image03.webp';



</script>   

<main class="h-auto w-full overflow-hidden">
    <article class="h-32 w-full flex items-center justify-center">
        <h1 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
            Register for an account
        </h1>
    </article>
    <article class="h-dvh w-full relative grid grid-cols-2">
        <section class="col-span-1 h-full w-full flex items-center justify-center">
            <div class="h-[80%] w-[90%]  flex items-center justify-center">
                <form action="?/register" method="POST" class=" flex flex-col gap-4 w-full">
                    <div class="flex flex-col gap-3">
                        <label for="Name">Name</label>
                        <input type="text" placeholder="Name" class="p-4 rounded-xl border-[1px] border-white" required>
                    </div>
                    <div class="flex flex-col gap-3">
                        <label for="Email">Email</label>
                        <input type="text" placeholder="Email" class="p-4 rounded-xl border-[1px] border-white" required>
                    </div>
                    <div class="flex flex-col gap-3">
                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" class="p-4 rounded-xl border-[1px] border-white" required>
                    </div>
                    <div class="flex flex-col gap-3">
                        <label for="reset_password">confirm password</label>
                        <input type="password" placeholder="confim password" class="p-4 rounded-xl border-[1px] border-white" required>
                    </div>

                    <div class="flex items-center justify-center">
                        <button class="btn btn-primary">
                            Register
                        </button>
                    </div>

                    

                </form>
            </div>
        </section>
        
        <section class="col-span-1 h-full w-full">
            <img src={Register} class="h-full w-full m-auto object-cover" loading="lazy" alt="">
        </section>

    </article>

    <article class="h-auto w-full relative overflow-hidden">
        <article class="h-32 w-full flex items-center justify-center">
            <h1 class="text-center text-3xl font-bold tracking-tight text-base-content">
                Already have an account
            </h1>
        </article>
        <section class="h-dvh w-full flex items-center justify-center gap-6">
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
    
            <a href="/Register/reset-password">		
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
        </section>
        
    </article>
</main>