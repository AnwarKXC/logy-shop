<template>
	<section class="container grid gap-16 relative">
		<div class="cent gap-6">
			<NuxtImg
				v-for="i in 5"
				:key="i"
				src=""
				class="w-[150px] dark:invert" />
		</div>
		<div class="flex relative">
			<div class="orinating text-[34px]">Explore new and popular styles</div>

			<div class="grid grid-cols-4 grid-rows-2 gap-4 overflow-hidden h-[80vh]">
				<div
					v-for="(i, index) in imageArr"
					:key="i.src"
					class="overflow-hidden"
					:class="
						index === 0
							? 'row-span-full col-span-2 '
							: 'col-span-1 row-span-1'
					">
					<NuxtImg
						:src="i.src"
						class="hover:scale-105 transition-all duration-1000  hover:origin-top-left origin-top  size-full object-cover object-center " />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const imageArr = [
		{
			src: "https://www.brownsfashion.com/BWStaticContent/16000/cd235dde-9daa-43b9-ae88-dab4c20eb596_splash-apr-24-13.jpg",
		},
		{
			src: "https://audaces.com/wp-content/uploads/2020/08/fashion-styles.webp",
		},
		{
			src: "/pegasus-41-blueprint-road-running-shoes-9ln3lK.png",
		},
		{
			src: "https://i.pinimg.com/736x/7b/ed/d9/7bedd9e49cf8339fbb1efbb96883b652.jpg",
		},
		{
			src: "https://static-01.daraz.pk/p/4e79ac879452105a4652ff178a64b31d.jpg_750x750.jpg_.webp",
		},
	];
</script>

<style scoped>
	.orinating {
		writing-mode: vertical-rl;
	}
</style>
