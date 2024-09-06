import { ColorsEnum } from './src/constants/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary  : ColorsEnum.PRIMARY,
				secondary: ColorsEnum.SECONDARY,
				accent   : ColorsEnum.ACCENT,
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
			},
			fontWeight: {
				extralight: 200,
				light     : 300,
				regular   : 400,
				medium	  : 500,
				semibold  : 600,
				bold	  : 700,
				extrabold : 800,
				black	  : 900,
			},
		},
	},
	plugins: [],
}
