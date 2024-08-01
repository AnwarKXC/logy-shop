<template>
	<main class="container relative py-10">
		<h2 class="text-xl font-bold mb-4">{{ $t("shop-cart") }}</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Main Cart Section -->
			<div
				class="md:col-span-2 p-4 pb-0 border border-gray-200 dark:border-gray-600 rounded-md self-start">
				<div class="py-8 pt-4 grid gap-4">
					<CartCard v-for="index in 3" />
				</div>
				<div
					class="flex justify-between items-center border-t py-4 dark:border-gray-600 border-dark/20">
					<span class="text-lg font-medium">{{ $t("price") }}</span>
					<span class="text-lg font-medium text-left">2,697 &nbsp;{{ $t("EGP") }}</span>
				</div>
				<div
					class="flex justify-between items-center border-t py-4 dark:border-gray-600 border-dark/20">
					<span class="text-lg font-medium">{{ $t("shipping") }}</span>
					<span class="text-lg font-medium"> <span>+</span> 2.00 &nbsp;{{ $t("EGP") }}</span>
				</div>
				<div
					class="flex justify-between items-center border-t py-4 dark:border-gray-600 text-gold">
					<span class="text-lg font-bold">{{ $t("total") }}</span>
					<span class="text-lg font-bold"> 2,699.00 &nbsp;{{ $t("EGP") }}</span>
				</div>
				<BaseButton
					variant="gold"
					class="w-2/3 min-w-fit mx-auto my-4"
					>{{ $t("checkout") }}</BaseButton
				>
			</div>
			<!-- Recommended Products Section -->
			<div class="p-4 border border-gray-200 dark:border-gray-600 rounded-md">
				<h2 class="text-xl font-bold mb-4">العملاء الذين تسوقوا أيضاً:</h2>
				<div class="flex items-center mb-4">
					<img
						src="https://via.placeholder.com/100"
						alt="Recommended Product"
						class="w-1/4" />
					<div class="ml-4 flex-1">
						<p class="text-lg font-semibold">كمبيوتر محمول</p>
						<p class="text-gray-700">ريال 2,799.00</p>
						<button class="text-blue-500">أضف إلى العربة</button>
					</div>
				</div>
				<!-- Add more recommended products here as needed -->
			</div>
		</div>
	</main>

	<br />
	<div>
		<h1>Your Cart</h1>

		<pre>
 			cartData:
		{{ cartData }} <br>
		  cart:
		{{ cart }}
		</pre>
	</div>
</template>

<script setup lang="ts">
	const { getCart } = useUser();

	const cart = await getCart();
	const { data: cartData, pending, error } = await useAsyncData("cart", () => getCart());
</script>

<style scoped></style>
