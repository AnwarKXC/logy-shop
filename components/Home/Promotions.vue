<template>
	<section class=" bg-gradient-to-t  from-gold parallax-container h-[75vh]"></section>
</template>

<script setup lang="ts"></script>

<style scoped>

.parallax-container {
  position: relative;
  overflow: hidden;
  background-image: url('/paralex.jpg');
  /* Replace with your background image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
	filter: brightness(1.3) contrast(1.1) saturate(1.1) 	;
		clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);
}
.parallax-container::after {
	content: "";
	position: absolute;
	inset: 0;
	background-color: #000000ae;
}

</style>
