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
        const playstation5Platform = platformsData.results.find((platform: { name: string }) => platform.name === 'PlayStation 5');

        if (!playstation5Platform) {
            throw new Error('PlayStation 4 platform not found');
        }

        const playstation5PlatformId = playstation5Platform.id;

        // Fetch the games for PlayStation 4
        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${playstation5PlatformId}&key=${VITE_RAWG_API_KEY}`);
        if (!gamesResponse.ok) {
            throw new Error('Failed to fetch games for PlayStation 4');
        }

        const PsFiveGames = await gamesResponse.json();
        // console.log(PsFiveGames);

        return {
            SonyPsFiveGames: PsFiveGames.results
        };
    } catch (error) {
        console.error('Error fetching SonyPsFiveGames:', error);
        return {
            SonyPsFiveGames: []
        };
    }
};
