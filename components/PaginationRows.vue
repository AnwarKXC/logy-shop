<template>
	<nav aria-label="Pagination">
		<ul class="pagination-list">
			<li>
				<button
					@click="changePage(0)"
					class="previous-button"
					:disabled="page === 0">
					<span class="sr-only">Previous</span>
					<svg
						class="md:w-2.5 w-2 md:h-2.5 h-2 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 1 1 5l4 4" />
					</svg>
				</button>
			</li>

			<li
				v-if="totalPages > 3 && currentPage > 1"
				class="select-none">
				...
			</li>

			<li
				v-for="page in [
					currentPage - 1,
					currentPage,
					currentPage + 1,
					currentPage + 2,
					currentPage + 3,
				].filter((item) => item >= 1 && item <= totalPages)"
				:key="page"
				class="hidden sm:block">
				<button
					@click="changePage(page - 1)"
					class="pagination-button"
					:class="{ active: page - 1 === currentPage }">
					{{ page }}
				</button>
			</li>
			<li
				v-for="page in [currentPage, currentPage + 1, currentPage + 2].filter(
					(item) => item >= 1 && item <= totalPages,
				)"
				:key="page"
				class="sm:hidden">
				<button
					@click="changePage(page - 1)"
					class="pagination-button"
					:class="{ active: page - 1 === currentPage }">
					{{ page }}
				</button>
			</li>

			<li
				v-if="totalPages > 3 && currentPage < totalPages - 3"
				class="select-none">
				...
			</li>

			<li>
				<button
					@click="changePage(totalPages - 1)"
					class="next-button"
					:disabled="currentPage === totalPages - 1">
					<span class="sr-only">Next</span>
					<svg
						class="w-2.5 h-2.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4" />
					</svg>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	const props = defineProps({
		total: {
			type: Number,
			default: 0,
		},
		pageSize: {
			type: Number,
			default: 0,
		},
		changed: {
			type: Boolean,
		},
	})

	watch(
		() => props.changed,
		(newValue, oldValue) => {
			if (newValue !== oldValue) {
				page.value = 0
			}
		},
	)

	let page = ref(0)
	const currentPage = computed(() => {
		return Math.floor(page.value / props.pageSize)
	})
	const totalPages = computed(() => {
		return Math.ceil(props.total / props.pageSize)
	})

	const emits = defineEmits(["pagestart"])

	function changePage(p) {
		page.value = p * props.pageSize
		emits("pagestart", page.value)
	}

	const loopNumbers = computed(() => {
		const start = Math.max(currentPage.value - 1, 1)
		const end = Math.min(currentPage.value + 1, totalPages)
		return Array.from({ length: end - start + 1 }, (_, index) => start + index)
	})
</script>

<style scoped>
	.pagination-list {
		display: flex;
		list-style-type: none;
		padding: 0;
		align-items: center;
		gap: 0.6rem;
	}

	.pagination-button {
		@apply flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1 dark:border-none;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.previous-button {
		@apply flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg  duration-300  disabled:cursor-not-allowed  disabled:bg-gray-200 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500 dark:disabled:border-none;
	}

	.next-button {
		@apply flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight border border-gray-300 rounded-e-lg bg-white duration-300 text-primary disabled:cursor-not-allowed disabled:bg-gray-200  dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500 dark:disabled:border-none;
	}
	.next {
		@apply flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight border border-gray-300 rounded-e-lg bg-white duration-300 text-primary disabled:cursor-not-allowed disabled:bg-gray-200;
	}

	.previous-button .arrow-icon {
		transform: rotate(180deg);
	}

	.next-button .arrow-icon {
		transform: none;
	}

	.active {
		@apply bg-primary text-primary text-white;
	}
</style>
