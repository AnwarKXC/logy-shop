<template>
	<Html
		:lang="localeProperties.code"
		:dir="localeProperties.direction">
		<Body class="bg-white dark:bg-[#1E2832] text-dark dark:text-yellow-50">
			<NuxtLoadingIndicator color="#FEFCE8" />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">

	const { localeProperties } = useI18n();

</script>
