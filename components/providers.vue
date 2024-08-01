<template>
	<div class="grid w-96 bg-dark dark:bg-white drop-shadow p-3   font-semibold rounded-lg dark:text-dark text-yellow-50 ">
		
		<div class="p-5 text-center text-xl  ">{{ $t("signInToAccount") }}</div>
		<hr>
		<button
			@click="signInGoogle"
			class="md:text-lg flex items-center justify-center gap-4 p-5  hover:bg-gold/10 rounded-t">
			<span> {{ $t('sign-in-with-google') }}</span>
			<Google size="32" />
		</button>
		<button
			@click="signInFacebook"
			class="flex md:text-lg items-center justify-center gap-4 p-5  hover:bg-gold/10 rounded-b">
			<span> {{ $t('sign-in-with-facebook') }}</span>
			<Facebook size="32"  />
		</button>
	</div>
</template>

<script setup lang="ts">
	const { signInGoogle, signInFacebook } = useProviders();

	import { Facebook, Google } from "@/components/icons";
</script>
