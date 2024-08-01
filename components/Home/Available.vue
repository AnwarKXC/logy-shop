<template>
	<section class="container">
		<h2 class="text-center">New & Popular</h2>
		<div class="cent my-8 overflow-hidden">
			<Swiper
				style="--swiper-theme-color: #000; --swiper-navigation-size: 32px"
				:modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
				:navigation="true"
				:centeredSlides="true"
				:slidesPerView="'auto'"
				:loop="true"
				:autoplay="{
					delay: 5000,
					disableOnInteraction: true,
				}"
				:breakpoints="{
					'500': {
						slidesPerView: 1.5,
						spaceBetween: 30,
					},
					'670': {
						slidesPerView: 2.2,
						spaceBetween: 30,
					},
					'850': {
						slidesPerView: 2.7,
						spaceBetween: 30,
					},
					'1000': {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					'1160': {
						slidesPerView: 3.4,
						spaceBetween: 30,
					},
				}">
				<SwiperSlide
					v-for="item in 20"
					:key="item">
					<div class="size-40 bg-red-500"></div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
