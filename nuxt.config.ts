// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"nuxt-server-utils",
		"@nuxtjs/i18n",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		"nuxt-icon",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"nuxt-swiper",
		["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
		"nuxt-vuefire",
	],
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [{ rel: "icon", type: "image/x-icon", href: "/tawzef-fav.png" }],
			script: [
				{
					src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0&appId=285360127173271",
				},
			],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	imports: {
		dirs: ["composables", "composables/api", "stores"],
	},
	tailwindcss: {
		// Options
		cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
		viewer: false,
		editorSupport: true,
	},
	css: ["~/assets/css/main.css"],
	colorMode: {
		hid: "nuxt-color-mode-script",
		globalName: "__NUXT_COLOR_MODE__",
		componentName: "ColorScheme",
		classPrefix: "",
		classSuffix: "",
		storageKey: "vueuse-color-scheme",
	},

	pinia: {
		storesDirs: ["./stores/**"],
	},

	i18n: {
		vueI18n: "./locale/i18n.config.ts",
		defaultLocale: "en",
		strategy: "prefix",
		detectBrowserLanguage: {
			useCookie: true,
		},
		locales: [
			{
				code: "en",
				iso: "en-US",
				name: "English",
				file: "./locale/en.json",
				direction: "ltr",
			},
			{
				code: "ar",
				iso: "ar",
				name: "Arabic",
				file: "./locale/ar.json",
				direction: "rtl",
			},
		],
	},
	vuefire: {
		emulators: {
			// uncomment this line to run the application in production mode without emulators during dev
			// enabled: false,
			auth: {
				options: {
					disableWarnings: true,
				},
			},
		},
		config: {
			apiKey: process.env.FIREBASE_API_KEY,
			authDomain: process.env.FIREBASE_AUTH_DOMAIN,
			projectId: process.env.FIREBASE_PROJECT_ID,
			storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.FIREBASE_APP_ID,
			measurementId: process.env.FIREBASE_MEASUREMENT_ID,
		},
		auth: {
			enabled: true,
			sessionCookie: true,
		},
	},
	googleFonts: {
		preload: true,

		families: {
			"IBM Plex Sans Arabic": [400, 500, 600, 700],
			Cairo: [400, 500, 600, 700, 800, 900, 1000],
			Sevillana: [400, 500],
		},
	},
	shadcn: {
		prefix: "ui",
	},
	image: {
		provider: "ipx",
		quality: 80,
	},
	nitro: {
		serveStatic: true,
	},
});
