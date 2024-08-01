<script setup>
	const localeRoute = useLocaleRoute();
</script>

<template>
	<main class="bg-gray-600/5 dark:bg-dark relative pb-16 pt-2 ">
			<!-- right vector -->
		<NuxtImg
			class="absolute right-0 bottom-[10%] w-36 dark:invert"
			src="/svgs/hero-vector-right.svg"
			alt="hero" />

<!-- text col -->
		<div class="grid lg:grid-cols-5 md:grid-cols-2 items-center container  gap-10 max-lg:pt-10">
			<div class=" lg:col-span-3 grid gap-10 max-md:justify-items-center">
				<h1 class=" font-semibold tracking-wider capitalize leading-none ">Collections</h1>
				<h4 class="  capitalize max-md:text-center  max-w-[40ch]">
					you can explore ans shop many differnt collection from various barands here.
				</h4>
					<BaseButton variant="gold" clx="md:w-1/4 whitespace-nowrap ">shop now</BaseButton>
			</div>

<!-- image col -->
			<div class="lg:col-span-2 lg:px-12 md:px-6 px-12 z-50 w-full ">
				<div class="relative rtl:scale-x-[-1] mx-auto">
					<div
						class="rounded-tl-[250px] rounded-br-[250px] drop-shadow-xl overflow-hidden aspect-[2/3]">
						<NuxtImg
							class="size-full drop-shadow-xl object-cover"
							src="https://www.condenastcollege.ac.uk/app/uploads/2023/12/AI-Fashion-by-Sarah-Butler.jpg"
							alt="hero" />
					</div>
					<div
						class="absolute top-6 left-6 size-full border-2 rounded-tl-[250px] rounded-br-[260px] border-dark  dark:border-gold opacity-50 z-[-1]"></div>
				</div>
			</div>
		</div>
			<!-- left vector -->
		<NuxtImg
			class="absolute left-0 top-[10%] w-32 dark:invert"
			src="/svgs/hero-vector-left.svg"
			alt="hero" />
	</main>
</template>

<style scoped>
	.contact__grid {
		grid-template-columns: repeat(auto-fill, minmax(270px, 350px));
	}
</style>
