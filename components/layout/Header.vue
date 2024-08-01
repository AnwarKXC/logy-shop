<script setup lang="ts">
	// Toggle modal function
	const modalActive = ref(false);
	const toggleModal = () => {
		modalActive.value = !modalActive.value;
	};

	const loginModal = ref(false);
	const toggleLoginModal = () => {
		loginModal.value = !loginModal.value;
	};
	const localeRoute = useLocaleRoute();

	const user = useCurrentUser();
	console.log("user", user.value);
</script>

<template>
	<header class="relative bg-gray-600/5 dark:bg-primary max-md:sticky bottom-0">
		<div class="py-1.5 md:grid grid-cols-3 flex justify-between gap-8 container items-center">
			<div class="gap-8 flex items-center max-md:hidden">
				<BaseSearch />
				<BaseModeSwitcher />
				<BaseLangSwitcher />
			</div>
			<div class="max-md:w-fit">
				<Logo />
			</div>
			<div class="flex items-center md:gap-8 gap-3 justify-end shrink-0">
				<NuxtLink :to="localeRoute('/cart')">
					<Icon
						name="material-symbols-light:shopping-bag-outline-sharp"
						size="32" />
				</NuxtLink>
				<div class="relative group shrink-0">
					<button
						class="max-md:hidden text-gold font-semibold tracking-wider cent gap-3"
						v-if="user">
						<img
							:src="user?.photoURL ?? ''"
							alt="profile image"
							width="40"
							height="40"
							class="rounded-full overflow-hidden" />
						{{ user?.displayName }}
						<Icon
							name="ic:round-keyboard-arrow-down"
							size="24" />
					</button>
					<button
						v-else
						class="max-md:hidden text-gold font-semibold tracking-wider"
						@click="toggleLoginModal">
						{{ $t("header.Login") }}
					</button>
					<div
						class="absolute top-full left-0 hidden group-hover:grid right-0 bg-dark dark:bg-white drop-shadow border text-yellow-50 dark:text-dark opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 ease-in-out z-[999] rounded overflow-hidden font-medium"
						v-if="user">
						<NuxtLink
							to="/"
							class="p-3 hover:bg-gray-700 dark:hover:bg-gray-200 w-full hover:font-se hover:text-gold"
							>{{ $t("header.Account") }}</NuxtLink
						>
						<NuxtLink
							to="/"
							class="p-3 hover:bg-yellow-50/10 dark:hover:bg-dark/10 w-full hover:font-se hover:text-gold"
							>{{ $t("orders") }}</NuxtLink
						>
						<LogOut>
							<button
								class="p-3 hover:bg-yellow-50/10 dark:hover:bg-dark/10 w-full hover:font-se text-start text-red-600">
								{{ $t("logout") }}
							</button>
						</LogOut>
					</div>
				</div>

				<button @click="toggleModal">
					<img
						src="/svgs/logo-vector.svg"
						alt=""
						class="md:hidden invert" />
				</button>
			</div>
		</div>
		<div class="container h-[0px] border border-gray-400 dark:border-gold opacity-50"></div>

		<div class="max-md:hidden">
			<NavLinks />
		</div>
	</header>

	<LazyMobileHeaderToggle
		:modalActive="modalActive"
		@close-modal="toggleModal" />
	<LazyModal
		v-if="!user"
		bgClose
		center
		:isVisible="loginModal"
		@update:isVisible="toggleLoginModal"
		modalClass="   cent  relative bg-opacity-10">
		<Providers />
	</LazyModal>
</template>

<style scoped></style>
