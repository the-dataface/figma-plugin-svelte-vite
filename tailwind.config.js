/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				// THE DATAFACE COLORS
				dataface: {
					light: '#00CCB3',
					DEFAULT: '#234C5E',
				},
			},
		},
	},
	plugins: [],
};
