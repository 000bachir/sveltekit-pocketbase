import type { Actions } from "./$types";
import pb from "$lib/utils/pocketBase";
import { error , redirect } from "@sveltejs/kit";
import { generateUsername } from "$lib/utils";

export const actions : Actions = {
    register : async({locals , request}) => {
        const formData = await request.formData()

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const name = formData.get('name') as string
        let username = generateUsername(name.split(" ").join('')).toLocaleLowerCase()
        
        try{
            await locals.pocketbase.collection('users').create({username , email , password})
            await locals.pocketBase.collection('users').requestVerification(email)
        }catch(err){
            console.log("error: ",err)
            throw new error(500 , "something went wrong")
        }
        throw redirect(303 , '/Register/login')
    }
}