import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		headers: {
			'Content-Type': 'application/javascript',
			'X-Content-Type-Options': 'nosniff'
		}
	}
});
