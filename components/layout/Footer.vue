<script setup lang="ts">
	const socials = ref([
		{
			icon: "ri:facebook-fill",
			url: "https://www.facebook.com/yourpage",
		},
		{
			icon: "tabler:brand-instagram",
			url: "https://www.facebook.com/yourpage",
		},
		{
			icon: "tabler:brand-whatsapp",
			url: "https://www.facebook.com/yourpage",
		},
		{
			icon: "tabler:phone-call",
			url: "https://www.facebook.com/yourpage",
		},
	]);
	const localeRoute = useLocaleRoute();

	const currentYear = ref(new Date().getFullYear());

	const isModalVisible = ref(false);

	function showModal() {
		isModalVisible.value = true;
	}

	function updateModalVisibility(value: boolean) {
		isModalVisible.value = value;
	}
</script>

<template>
	<footer class="bg-gray-300/5">
		<div class="container">
			<div class="grid md:grid-cols-4 gap-8 py-10">
				<div class="md:col-span-2 place-content-center">
					<div class="w-64 max-md:mx-auto">
						<Logo />
					</div>
				</div>
				<div class="grid gap-6 place-content-center">
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("terms&Conditions") }}
					</nuxt-link>
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("terms&Conditions") }}
					</nuxt-link>
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("terms&Conditions") }}
					</nuxt-link>
				</div>
				<div class="grid gap-6 place-content-center">
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("terms&Conditions") }}
					</nuxt-link>
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("terms&Conditions") }}
					</nuxt-link>
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("terms&Conditions") }}
					</nuxt-link>
				</div>
			</div>
			<hr class="opacity-10" />
			<div
				class="text-center flex flex-wrap gap-8 gap-y-4 items-center justify-around md:justify-between py-8">
				<div class="">
					<p>
						{{ $t("nav.copyright") }} &nbsp;{{ currentYear }}&nbsp;{{
							$t("nav.rightsReserved")
						}}
					</p>
					<p class="font-serif pt-1">
						{{ $t("developed") }} &nbsp;
						<!-- <abbr
							:title="$t('nav.contact')"
							class="py-2 bg-dark text-gold">
							<button
								@click="showModal"
								class="text-gold underline"
								href="mailto:anwark.gmail.com">
								{{ $t("AnwarKamal") }}
							</button></abbr
						> -->
						<BaseTooltip>
							<template #trigger>
								<!-- Pop up trigger content -->
								<button @click="showModal"
									class="text-gold underline bg-transparent border-none cursor-pointer p-0">
									{{ $t("AnwarKamal") }}
								</button>
							</template>
							<template #body>
								<div class=" whitespace-nowrap">

								{{ $t("nav.contact") }}
								</div>
							</template>
						</BaseTooltip>
					</p>
				</div>
				<div class="flex gap-6">
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("termsConditions") }}
					</nuxt-link>
					<nuxt-link
						:to="localeRoute('/privacy-policy')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("PrivacyPolicy") }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</footer>
	<LazyModal
		bgClose
		center
		:isVisible="isModalVisible"
		@update:isVisible="updateModalVisibility"
		modalClass="   cent  relative">
		<BaseCard />
	</LazyModal>
</template>

<style scoped></style>
