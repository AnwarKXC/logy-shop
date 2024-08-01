<template>
	<ClientOnly>
		<section class="bg-gray-600/5 dark:bg-dark">
			<div class="justify-center container w-full items-center mx-auto">
				<h2 class="leading-[36px] text-center pb-6">Follow Us</h2>
				<div class="grid-template mt-8 justify-items-center">
					<div
						class="fb-page sm:!block !hidden drop-shadow-gold"
						data-href="https://www.facebook.com/profile.php?id=100083273744429"
						data-tabs="timeline"
						data-width="500"
						data-height="356"
						data-small-header="true"
						data-adapt-container-width="true"
						data-hide-cover="false"
						data-show-facepile="true" />

					<div
						class="fb-group sm:!block !hidden drop-shadow-gold"
						data-href="https://www.facebook.com/groups/1906603669483476"
						data-tabs="timeline"
						data-width="500"
						data-height="300"
						data-small-header="true"
						data-adapt-container-width="true"
						data-hide-cover="false"
						data-show-facepile="true" />
					<div
						class="fb-page sm:!hidden"
						data-href="https://www.facebook.com/profile.php?id=100083273744429"
						data-tabs="timeline"
						data-width="260"
						data-height="356"
						data-small-header="true"
						data-adapt-container-width="true"
						data-hide-cover="false"
						data-show-facepile="true" />

					<div
						class="fb-group sm:!hidden"
						data-href="https://www.facebook.com/groups/1906603669483476"
						data-tabs="timeline"
						data-width="260"
						data-height="300"
						data-small-header="true"
						data-adapt-container-width="true"
						data-hide-cover="false"
						data-show-facepile="true" />
				</div>
			</div>
		</section>
	</ClientOnly>
</template>

<script setup lang="ts">
	onMounted(() => {
		const loadScript = (src: string) => {
			return new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.src = src;
				script.async = true;
				script.onload = resolve;
				script.onerror = reject;
				document.body.appendChild(script);
			});
		};

		// Load Facebook SDK for JavaScript
		loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0")
			.then(() => {
				// Initialize Facebook widgets
				if ((window as any).FB && (window as any).FB.XFBML) {
					(window as any).FB.XFBML.parse();
				}
			})
			.catch((error) => {
				console.error("Error loading Facebook SDK:", error);
			});
	});
</script>

<style scoped>
	.grid-template {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
	}

	@media screen and (max-width: 550px) {
		.grid-template {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		}
	}
</style>
