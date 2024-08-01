<template>
	<HomeHeroSection />
	<HomeNewPopular />
	<HomeProductsSection />
	<HomePromotions />
	<HomeAvailable />
	<HomeFollowUs />
	<div class="flex flex-wrap gap-6">
		<button
			v-for="item in data"
			@click="addToCart(item._id)"
			:key="item._id">
			{{ item._id }}
			<img
				:src="item.images[0]"
				alt=""
				width="100"
				height="100" />
		</button>
	</div>
</template>
<script setup lang="ts">
	const { getAllProducts } = useProducts();
	const data = await getAllProducts();
	const { addToCart } = useUser();
</script>
<style scoped></style>
