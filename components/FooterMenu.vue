<script setup lang="ts">
	defineProps({
		title: {
			type: String as any,
		},
		menu: {
			type: Array as PropType<{ label: string; url: string }[]>,
		},
	})

	const localeRoute = useLocaleRoute()
</script>

<template>
	<div>
		<h5 class="font-bold text-lg my-8">
			{{ $t(title)  }}
		</h5>
		<ul class="space-y-3">
			<nuxt-link
				v-for="menuItem in menu"
				:key="menuItem.label"
				:to="localeRoute(menuItem.url)"
				class="text-sm text-white font-light hover:text-primary hover:font-bold block">
				{{ $t(menuItem.label) }}
			</nuxt-link>
		</ul>
	</div>
</template>

<style scoped>
	.router-link-active {
		font-weight: bold;
		@apply text-primary;
	}
</style>
