
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
        const XboxXsPlatform = platformsData.results.find((platform: { name: string }) => platform.name === 'Xbox Series S/X');

        if (!XboxXsPlatform) {
            throw new Error('PlayStation 4 platform not found');
        }

        const XboxXsPlatformId = XboxXsPlatform.id;

        // Fetch the games for PlayStation 4
        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${XboxXsPlatformId}&key=${VITE_RAWG_API_KEY}`);
        if (!gamesResponse.ok) {
            throw new Error('Failed to fetch games for Xbox Series S/X');
        }

        const gamesData = await gamesResponse.json();
        console.log(gamesData);

        return {
            XboxXSGames: gamesData.results
        };
    } catch (error) {
        console.error('Error fetching XboxXSGames:', error);
        return {
            XboxXSGames: []
        };
    }
};
