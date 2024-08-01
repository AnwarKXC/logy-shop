<template>
	<div
		class="flex flex-col md:flex-row items-center gap-3 p-4 rounded-lg dark:bg-white/10 bg-dark/10 drop-shadow-sm">
		<img
			src="https://via.placeholder.com/150"
			alt="Product Image"
			class="w-full md:w-1/4  aspect-square" />
		<div class="md:ml-4 flex-1">
			<p class="text-lg font-semibold mb-2">لابتوب ألعاب فيكتوس</p>
			<p class="mb-2 line-clamp-3">FHD, رايزن 5 7535HS, AMD, 15.6 إنش, RAM 8GB, SSD 512GB, RTX 2050 FHD, رايزن 5 7535HS, AMD, 15.6 إنش, RAM 8GB, SSD 512GB, RTX 2050FHD, رايزن 5 7535HS, AMD, 15.6 إنش, RAM 8GB, SSD 512GB, RTX 2050</p>
			<p class="">ريال 2,699.00</p>
		</div>
		<div class="flex flex-col items-center">
			<span class="mb-2">{{ $t('quantity') }} 1</span>
			<button class="text-red-600 cent gap-0.5 p-1.5 rounded-lg hover:bg-white duration-300">{{ $t("delete") }} <Icon  name="weui:delete-on-outlined"  color="red" size="20"/></button>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
