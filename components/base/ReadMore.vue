<template>
	<NuxtLink :to="localeRoute(to)"
		class="font-bold underline transition-all text-primary group decoration-transparent dark:hover:decoration-gray-200 hover:decoration-zinc-600 decoration-2 underline-offset-4 hover:cursor-pointer ">
		{{ $t("readMore") }}
		<Icon name="solar:arrow-right-linear" class="transition-all group-hover:translate-x-3 rtl:group-hover:-translate-x-3 rtl:rotate-180" />
	</NuxtLink>
</template>

<script setup lang="ts">
const localeRoute = useLocaleRoute();


defineProps<{ to: string }>()



</script>
