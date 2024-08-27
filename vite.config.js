import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		headers: {
			'Content-Type': 'application/javascript',
			'X-Content-Type-Options': 'nosniff'
		}
	}
};

export default config;
