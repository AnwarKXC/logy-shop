<template>
	<div class="relative">
		<i
			class="fas fa-search"
			:class="
				showSearch
					? ' absolute top-0 bg-deepSapphire h-full p-0.5 px-1 z-50 rounded-s  border'
					: ''
			">
			<svg
				@click="toggleSearch"
				:class="showSearch ? ' mt-1 text-white size-4 p-0.5' : ''"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="size-5">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
			</svg>
		</i>

		<input
			v-if="showSearch"
			type="text"
			v-model="searchQuery"
			class="search-input ps-8 p-1 border outline-none dark:bg-dark dark:border-none focus:border-deepSapphire"
			placeholder="Search..." />
	</div>
</template>

<script setup>
	import { ref } from "vue"

	// State
	const showSearch = ref(false)
	const searchQuery = ref("")

	// Methods
	const toggleSearch = () => {
		showSearch.value = !showSearch.value
	}
</script>

<style scoped>
	.fas {
		cursor: pointer;
		font-size: 24px;
	}

	.search-input {
		margin-left: 10px;
		border-radius: 4px;
	}
</style>
