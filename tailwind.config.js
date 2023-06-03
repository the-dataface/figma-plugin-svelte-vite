/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		fontFamily: {
			theme: 'var(--font-family)',
		},
		extend: {
			colors: {
				// BRAND COLORS
				'accent-light': 'var(--accent-light)',
				'accent-dark': 'var(--accent-dark)',
				foreground: 'var(--foreground)',
				background: 'var(--background)',
			},
		},
	},
	plugins: [],
};
