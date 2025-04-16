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
        const macOsPlatform = platformsData.results.find((platform: { name: string }) => platform.name === 'macOS');

        if (!macOsPlatform) {
            throw new Error('macOs platform not found');
        }

        const macOSPlatformId = macOsPlatform.id;

        // Fetch the games for PlayStation 4
        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${macOSPlatformId}&key=${VITE_RAWG_API_KEY}`);
        if (!gamesResponse.ok) {
            throw new Error('Failed to fetch games for PlayStation 4');
        }

        const macOsGames = await gamesResponse.json();
        // console.log(macOsGames);

        return {
            macOsGames: macOsGames.results
        };
    } catch (error) {
        console.error('Error fetching macOsGames:', error);
        return {
            macOsGames: []
        };
    }
};
