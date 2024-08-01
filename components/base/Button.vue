<template>
	<button
		class="px-5 py-3.5 cent gap-2 rounded-lg  font-semibold  hover:scale-[.975] transition-all duration-500"
		:class="[
			{
				'bg-forground': variant === 'primary',
				'bg-secondary': variant === 'secondary',
				'bg-gold text-white  ': variant === 'gold',
				'bg-transparent': variant === 'transparent',
			},
			clx,
		]">
		<slot />
		<slot name="icon"></slot>
	</button>
</template>

<script setup>
	const props = defineProps({
		variant: {
			type: String,
			default: "primary",
		},
		clx: {
			type: String,
			default: "",
		},
	});
</script>

<style scoped>
	/* Add your scoped styles here */
</style>
