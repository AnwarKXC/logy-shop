<template>
	<div @click="logOut"><slot /></div>
</template>

<script setup>
	const { logOut } = useProviders();
</script>

<style lang="scss" scoped></style>
