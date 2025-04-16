import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm run preview && pnpm run dev',
		port: 5173
	},
	testDir: './tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	use : {
		browserName : "chromium" , 
		headless : false
	}
};

export default config;
