import { redirect , error } from "@sveltejs/kit"
import type {Actions} from "./$types"


export const actions : Actions = {
    login : async({locals , request}) => {
        const formData = await request.formData()
        const email = formData.get("email") as string
        const password =  formData.get('password') as string

        try{
            await locals.pocketbase.collection('users').authWithPassword(email  ,password)
            if(!locals.pocketbase.authStore.record){
                locals.pocketbase.authStore.clear()
                return {
                    notVerified : true
                }
            }
        }catch(err){
            console.log("error" , err)
            throw error(500 , 'something went wrong in the operation')
        }
        throw redirect(303 , '/')
    }
}