const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: ".5rem",
				screens: {
					"2xl": "1280px",
				},
			},
			dropShadow: {
				gold: "0 10px 40px #ca8b0445",
				dark: "0 8px 16px #1E2832",
				vsoft: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
				soft: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				soft3: "rgba(0, 0, 0, 0.1) 0px 0px 24px 8px",
				soft2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				figma: "0px 12px 24px 0px rgba(233, 235, 248, 0.50)",
			},
			maxWidth: {
				"8xl": "90rem",
			},
			gradientColorStopPositions: {
				55: "55%",
				45: "45%",
			},
			colors: {
				dark: "#1E2832",
				gold: "#CA8A04",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: 0,
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: 0,
					},
				},
				"collapsible-down": {
					from: {
						height: 0,
					},
					to: {
						height: "var(--radix-collapsible-content-height)",
					},
				},
				"collapsible-up": {
					from: {
						height: "var(--radix-collapsible-content-height)",
					},
					to: {
						height: 0,
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.2s ease-in-out",
				"collapsible-up": "collapsible-up 0.2s ease-in-out",
			},
			fontFamily: {
				plex: "IBM Plex Sans Arabic",
			},
			boxShadow: {
				soft: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
			},
		},
	},
	plugins: [animate],
};
