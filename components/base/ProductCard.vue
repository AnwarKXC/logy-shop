<template>
	<div class="relative">
		<div
			class="w-full h-[478px] flex-col scale-[.98] justify-start items-center gap-[18px] inline-flex relative transition-transform duration-500 hover:scale-100 transform overflow-hidden group:">
			<div
				class="self-stretch group grow relative shrink basis-0 flex-col justify-center items-center flex overflow-hidden">
				<NuxtImg
					class="min-w-[280px] w-full max-w-96 mx-auto h-[400px] group-hover:scale-110 transform"
					src="https://www.duraplas.com.au/wp-content/uploads/2015/08/Smiling-young-casual-man-2.png" />
				<NuxtLink
					to="/dewd"
					class="absolute inset-0 bg-black/20 items-center justify-center duration-500 opacity-0 group-hover:opacity-100 flex">
					<div
						class="bg-gold text-dark font-['Cairo'] font-semibold px-10 translate-y-40 py-3 capitalize group-hover:scale-100 scale-0 duration-1000 group-hover:translate-y-20">
						add
					</div>
				</NuxtLink>
			</div>
			<NuxtLink
				:to="localeRoute(`/`)"
				class="w-[292px] h-[60px] relative">
				<div class="text-base font-semibold capitalize">Adicolor Classics Joggers</div>
				<div class="flex justify-between items-center">
					<div class="text-base font-normal capitalize">Dress</div>
					<div class="text-right text-base font-semibold capitalize">$63.85</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	const localeRoute = useLocaleRoute();
</script>

<style scoped></style>
