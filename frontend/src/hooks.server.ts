import PocketBase from "pocketbase"
import { serializeNonPOJOs } from "$lib/utils"
import type { Handle } from "@sveltejs/kit";
import pb from "$lib/utils/pocketBase";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";

export const handle : Handle = async({event , resolve}) => {
    event.locals.pocketbase = pb
    event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '')


    if(event.locals.pocketbase.authStore.isValid){
        event.locals.user = serializeNonPOJOs(event.locals.pocketbase.authStore.record)
    }else {
        event.locals.user =  undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie({secure : false}))

    return response
}