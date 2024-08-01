<template>
	<NuxtLink
		:to="localeRoute('/')"
		class="mx-auto flex items-center gap-2 justify-center">
		<NuxtImg
			src="/svgs/logo-vector.svg"
			class="md:w-8 w-6 dark:invert"
			alt="logo" />
		<h3 class="sevillana rtl:hidden  whitespace-nowrap text-gold">{{$t('LogyShop')}} </h3>
		<h3 class="ltr:hidden  whitespace-nowrap text-gold">{{$t('LogyShop')}} </h3>
		<NuxtImg
			src="/svgs/logo-vector.svg"
			class="md:w-8 w-6 dark:invert"
			alt="logo" />
	</NuxtLink>
</template>

<script setup lang="ts">
	const localeRoute = useLocaleRoute()
</script>

<style scoped></style>
