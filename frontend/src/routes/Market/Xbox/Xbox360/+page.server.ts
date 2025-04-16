
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
        const XboxThreeSixtyPlatform = platformsData.results.find((platform: { name: string }) => platform.name === 'Xbox 360');

        if (!XboxThreeSixtyPlatform) {
            throw new Error('Xbox 360 platform not found');
        }

        const XboxThreeSixtyPlatformId = XboxThreeSixtyPlatform.id;

        // Fetch the games for PlayStation 4
        const gamesResponse = await fetch(`https://api.rawg.io/api/games?platforms=${XboxThreeSixtyPlatformId}&key=${VITE_RAWG_API_KEY}`);
        if (!gamesResponse.ok) {
            throw new Error('Failed to fetch games for Xbox Series S/X');
        }

        const gamesData = await gamesResponse.json();
        console.log(gamesData);

        return {
            XboxThreeSixty : gamesData.results
        };
    } catch (error) {
        console.error('Error fetching XboxThreeSixty :', error);
        return {
            XboxThreeSixty  : []
        };
    }
};
