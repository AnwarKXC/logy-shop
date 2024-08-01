<template>
	<nav class="md:items-center justify-center gap-8 lg:gap-10 flex-col md:flex-row flex">
		<NuxtLink
			:to="localeRoute(link.href)"
			v-for="(link, index) in navLinks"
			class="nav_link nav_link_dash  py-1.5 text-primary font-medium tracking-wider w-fit "
			:key="link.name"
			
			>{{ $t(link.name) }}</NuxtLink
		>
	</nav>
</template>

<script setup>
	const navLinks = [
		{ name: "nav.home", href: "/" },
		{ name: "Sale", href: "/sale" },
		{ name: "Fawry", href: "/fawry" },
		{ name: "Shoes", href: "/all" },
		{ name: "Bags", href: "/bags" },
		{ name: "watches", href: "/watches" },
		{ name: "others", href: "/category" },
];

	
	const localeRoute = useLocaleRoute()

</script>

<style scoped>
	.router-link-active {
		@apply text-gold before:hidden border-b-2 border-gold;
	}


	.nav_link {
		position: relative;
	}

	.nav_link::before {
		transition: width 500ms;
		height: 1.5px;
		content: "";
		position: absolute;
		background-color: var(--primary);
		border-radius: 50px;
		width: 0;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0px;
	}

	.nav_link_dash:hover::before {
		width: 100%;
		transform: translateX(0);
		inset-inline-start: 0px;
	}
</style>
