<script setup lang="ts">
	import { boolean } from "zod"

	defineProps({
		header: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		isDescription: {
			type: boolean,
			default: true,
		},
		buttonText: {
			type: String,
			required: true,
		},
		buttonLink: {
			type: String,
			required: true,
		},
		button: {
			type: boolean,
			default: true,
		},
		titileClasses: String,
	})

	const localeRoute = useLocaleRoute()
</script>

<template>
	<div>
		<!-- <h4 class="font-bold mb-6 text-primary">
      {{ header }}
    </h4>
    <div class="space-y-10">
      <h2 class="text-5xl font-bold">
        <WrapBalancer>
          {{ title }}
        </WrapBalancer>
      </h2> -->
		<BaseHeaderWithTitle
			:titile-classes="titileClasses"
			:header="header"
			:title="title" />
		<p class="leading-relaxed my-10 font-medium">
			<WrapBalancer
				class="dark:text-[#A6A6A6] font-normal"
				v-if="isDescription">
				{{ description }}
			</WrapBalancer>
		</p>
		<NuxtLink
			:to="localeRoute(buttonLink)"
			v-if="button">
			<uiButton
				size="lg"
				class="space-x-1">
				<span>{{ buttonText }}</span>
				<Icon name="tabler:arrow-narrow-right"  class="rtl:rotate-180"/>
			</uiButton>
		</NuxtLink>
	</div>
</template>

<style scoped></style>
