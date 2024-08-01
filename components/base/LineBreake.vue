<template>
	<div class="h-[.5px] w-full " :class=" color"></div>
</template>

<script setup lang="ts">
defineProps( {
	color: String
} )
</script>
