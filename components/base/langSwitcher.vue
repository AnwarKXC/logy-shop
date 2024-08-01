<script setup lang="ts">
	const switchLocalePath = useSwitchLocalePath()
  
</script>

<template>
	<div>
		<NuxtLink
			v-if="$i18n.locale === 'ar'"
			class="localeButtonStyle"
			:to="switchLocalePath('en')">
			<p class="flex items-center gap-2 ">
				English
				<Icon
					name="icon-park-solid:english"
					class="text-lg" />
			</p>
		</NuxtLink>
		<NuxtLink
			v-if="$i18n.locale === 'en'"
			class="localeButtonStyle"
			:to="switchLocalePath('ar')">
			<p class="flex items-center gap-2">
				عربي

				<svg
					width="14"
					height="17"
					viewBox="0 0 14 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect
						y="0.735352"
						width="14"
						height="15"
						rx="7"
						fill="white" />
					<path
						d="M4.443 16.5954C4.118 16.1404 3.858 15.6464 3.676 15.1004C3.494 14.5544 3.403 13.9304 3.403 13.2284C3.403 12.7474 3.442 12.3054 3.52 11.9154H4.495C4.339 11.6164 4.209 11.2784 4.105 10.9144C4.001 10.5504 3.949 10.1604 3.949 9.74435C3.949 9.12035 4.066 8.57435 4.313 8.10635C4.547 7.63835 4.859 7.24835 5.249 6.93635C5.548 6.68935 5.899 6.49435 6.302 6.36435C6.705 6.23435 7.147 6.16935 7.615 6.16935C8.096 6.16935 8.551 6.23435 8.993 6.36435C9.435 6.49435 9.877 6.66335 10.319 6.88435L9.708 8.53535C9.422 8.37935 9.123 8.24935 8.785 8.14535C8.447 8.04135 8.135 7.97635 7.836 7.97635C7.238 7.97635 6.757 8.13235 6.419 8.41835C6.185 8.62635 6.016 8.84735 5.925 9.09435C5.821 9.34135 5.782 9.60135 5.782 9.88735C5.782 10.3034 5.834 10.6804 5.964 11.0184C6.081 11.3564 6.25 11.6554 6.471 11.9154H10.592V13.7354H5.249V13.9304C5.249 14.2554 5.288 14.5804 5.392 14.8924C5.483 15.2174 5.639 15.5684 5.86 15.9324L4.443 16.5954Z"
						fill="black" />
				</svg>
			</p>
		</NuxtLink>
	</div>
</template>

<style scoped>

</style>
