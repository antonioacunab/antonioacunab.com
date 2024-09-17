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
            keyframes: {
                scale: {
                    "0%, 100%": { transform: "scale(1.05)" },
                    "50%"     : { transform: "scale(1)"},
                },
                "inverted-scale": {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%"     : { transform: "scale(1.05)" },
                },
            },
            animation: {
                scale: "scale 5s ease-in-out infinite",
                "inverted-scale": "inverted-scale 5s ease-in-out infinite",
            },
		},
	},
	plugins: [],
}
