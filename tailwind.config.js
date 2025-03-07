import daisyui from 'daisyui';
import tailwindTypography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [tailwindTypography, daisyui]
};
