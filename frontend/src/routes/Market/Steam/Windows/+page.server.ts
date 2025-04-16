import type { PageServerLoad } from "./$types";
import { VITE_RAWG_API_KEY } from "$env/static/private";


export const load : PageServerLoad  = async({fetch}) =>{
    try {
        const platformsResponse = await fetch(`https://api.rawg.io/api/platforms?key=${VITE_RAWG_API_KEY}`);

        if(!platformsResponse.ok){
            throw new Error("failed to fetch from the plateform")
        }

        const platformsData = await platformsResponse.json()

        const WindowsPlatforme = platformsData.results.find((platfome : {name : string}) => platfome.name === 'PC')
        if(!WindowsPlatforme){
            throw new Error("Windows plateforme is not found")
        }

        let WindowsPlatformeId = WindowsPlatforme.id

        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${WindowsPlatformeId}&key=${VITE_RAWG_API_KEY}`)
        if(!gamesResponse.ok){
            throw new Error("Failed to fetch games for Windows")
        }


        const WindowsGames = await gamesResponse.json()

        return{
            WindowsGames : WindowsGames.results
        }

    } catch (error) {
        console.error("error fetching windows games",error)
        return {
            WindowsGames : []
        }
    }
}

