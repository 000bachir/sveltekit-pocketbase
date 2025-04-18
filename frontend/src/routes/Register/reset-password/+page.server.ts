import { error , redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export const actions : Actions = {
    resetPassword : async({locals , request}) => {
        const formData  = await request.formData()
        const email = formData.get('email') as string

        try{
            await locals.pocketbase.collection('users').requestPasswordReset(email)
            return {
                success : true
            }
        }catch(err){
            console.log("error" , err)
            throw error(500 , "something went wrong")
        }

    }
}