import type { PageServerLoad } from "./$types";
import { VITE_RAWG_API_KEY } from "$env/static/private";
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
        const LinuxPlatform = platformsData.results.find((platform: { name: string }) => platform.name === 'Linux');

        if (!LinuxPlatform) {
            throw new Error('Linux platform not found');
        }

        const LinuxPlatformId = LinuxPlatform.id;

        // Fetch the games for PlayStation 4
        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${LinuxPlatformId}&key=${VITE_RAWG_API_KEY}`);
        if (!gamesResponse.ok) {
            throw new Error('Failed to fetch games for PlayStation 4');
        }

        const LinuxGames = await gamesResponse.json();
        // console.log(LinuxGames);

        return {
            LinuxGames: LinuxGames.results
        };
    } catch (error) {
        console.error('Error fetching LinuxGames:', error);
        return {
            LinuxGames: []
        };
    }
};


// import { VITE_RAWG_API_KEY } from '$env/static/private';
// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ fetch }) => {
//     const url = `https://api.rawg.io/api/platforms?key=${VITE_RAWG_API_KEY}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Failed to fetch games');
//         }
//         const games = await response.json();
//         console.log(games)
//         return { games };
//     } catch (error) {
//         console.error('Error fetching games:', error);
//         return { games: [] };
//     }
// };
