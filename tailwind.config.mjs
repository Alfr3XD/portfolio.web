/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				default: "rgb(var(--def), <alpha-value>)",
				primary: {
					DEFAULT: "rgb(var(--primary), <alpha-value>)",
				},
				secondary: {
					DEFAULT: "rgb(var(--secondary), <alpha-value>)",
				},
				danger: {
					DEFAULT: "rgb(var(--danger), <alpha-value>)",
				},
				success: {
					DEFAULT: "rgb(var(--success), <alpha-value>)",
				},
				warning: {
					DEFAULT: "rgb(var(--warning), <alpha-value>)",
				},
				foreground: {
					DEFAULT: "rgb(var(--foreground))",
					dark: "rgb(var(--foreground-dark))",
				},
				input: {
					DEFAULT: "rgb(var(--input), <alpha-value>)",
					hover: "rgb(var(--input-hover), <alpha-value>)",
					focus: "rgb(var(--input-focus), <alpha-value>)",
				},
				content: {
					DEFAULT: "rgb(var(--content), <alpha-value>)",
					dark: "rgb(var(--content-dark), <alpha-value>)",
					stroke: "rgb(var(--content-stroke))",
				},
				paragraph: {
					DEFAULT: "rgb(var(--paragraph), <alpha-value>)",
				},
			},
		},
	},
	plugins: [],
}
