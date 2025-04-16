// import type { PageServerLoad } from "./$types";
import { VITE_RAWG_API_KEY } from "$env/static/private";

// export const load: PageServerLoad = async ({ fetch }) => {
//     try {
//         const req = await fetch(`https://api.rawg.io/api/platforms?key=${VITE_RAWG_API_KEY}`);

//         if (!req.ok) {
//             throw new Error('Failed to fetch games');
//         }

//         const SonyGames = await req.json();
//         console.log(SonyGames);
//         return {
//             SonyGames
//         };
//     } catch (error) {
//         console.error('Error fetching SonyGames:', error);
//         return {
//             SonyGames: []
//         };
//     }
// };


import type { PageServerLoad } from "./$types";

// Assuming your API key is stored in an environment variable

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        // Fetch the list of platforms
        const platformsResponse = await fetch(`https://api.rawg.io/api/platforms?key=${VITE_RAWG_API_KEY}`);
        
        if (!platformsResponse.ok) {
            throw new Error('Failed to fetch platforms');
        }

        const platformsData = await platformsResponse.json();

        // Find the platform ID for PlayStation 4
        const playstation4Platform = platformsData.results.find((platform: { name: string }) => platform.name === 'PlayStation 4');

        if (!playstation4Platform) {
            throw new Error('PlayStation 4 platform not found');
        }

        const playstation4PlatformId = playstation4Platform.id;

        // Fetch the games for PlayStation 4
        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${playstation4PlatformId}&key=${VITE_RAWG_API_KEY}`);
        if (!gamesResponse.ok) {
            throw new Error('Failed to fetch games for PlayStation 4');
        }

        const gamesData = await gamesResponse.json();
        console.log(gamesData);

        return {
            SonyGames: gamesData.results
        };
    } catch (error) {
        console.error('Error fetching SonyGames:', error);
        return {
            SonyGames: []
        };
    }
};
