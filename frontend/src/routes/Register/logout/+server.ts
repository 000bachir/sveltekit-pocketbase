import { redirect } from "@sveltejs/kit";


export const POST = ({locals}) => {
    locals.pocketbase.authStore.clear()
    locals.pocketbase.user = undefined


    throw redirect(303 , '/')
}