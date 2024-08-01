<template>
	<section class="container">
		<h2 class="text-center">New & Popular</h2>
		<div class="justify-between items-center flex mt-8">
			<div class="cent gap-8">
				<div
					class="justify-center items-center flex"
					v-for="item in ['all products', 't-shirt', 'hoodies', 'jacket']">
					<NuxtLink
						:to="localeRoute(`/`)"
						class="hover:text-gold text-base font-['Open Sans'] capitalize">
						{{ item }}
					</NuxtLink>
				</div>
			</div>
			<div class="px-[15px] py-[5px] bg-gray-800 justify-start items-center gap-1 inline-flex">
				<div class="w-5 h-5 justify-center items-center flex">
					<div
						class="w-4 text-center text-white text-sm font-black">
					</div>
				</div>
				<div class="text-white text-base font-normal font-['Open Sans'] capitalize">filter</div>
			</div>
		</div>
		<div class="products_section grid gap-8 gap-y-16 my-8">
			<!-- <BaseProductCard  /> -->
			<BaseCard2 v-for="item in 9" />
		</div>
	</section>
</template>

<script setup lang="ts">
	const localeRoute = useLocaleRoute();
</script>

<style scoped>
	.products_section {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
	@media screen and (max-width: 768px) {
		.products_section {
			grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		}
	}
</style>
