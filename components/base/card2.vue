<template>
	<div class="div">
		<NuxtLink
			:to="localeRoute(`/product/${product?.slug}/${product?.id}`)"
			class="employee group">
			<div class="employee-image dark:bg-white/60">
				<img
					src="https://www.duraplas.com.au/wp-content/uploads/2015/08/Smiling-young-casual-man-2.png"
					class="mx-auto group-hover:scale-110 duration-500 origin-top"
					alt="employee-image " />
			</div>
			<div class="employee-details">
				<div class="employee-name bg-dark/85 backdrop-blur-[2px]">
					<div>Jackson</div>
					<div>Jackson</div>
					<div>Jackson</div>
				</div>
				<div class="employee-social-link">
					<ul>
						<li class="bg-dark/85 text-gold">
							<button
								@click.stop.prevent="addToCart"
								class="min-w-7">
								<Icon
									name="material-symbols-light:shopping-bag-outline-sharp"
									size="32"
									v-if="!cart" />
								<Icon
									v-else
									name="material-symbols-light:shopping-bag-sharp"
									size="32" />
							</button>
						</li>
						<li class="bg-dark/85 text-gold">
							<button
								@click.stop.prevent="addToFavorites"
								class="min-w-7">
								<Icon
									name="mdi:heart-outline"
									size="32"
									v-if="!favorite" />
								<Icon
									name="mdi:heart"
									size="32"
									v-else />
							</button>
						</li>
					</ul>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup>
	const props = defineProps({
		product: {
			type: Object,
			required: true,
		},
	});

	const localeRoute = useLocaleRoute();
	const favorite = ref(false);
	const cart = ref(false);
	const addToCart = () => {
		cart.value = !cart.value;
		console.log("Adding to cart");
	};
	const addToFavorites = () => {
		favorite.value = !favorite.value;
		console.log("Adding to cart");
	};
</script>

<style scoped>
	.employee {
		width: 100%;
		margin: 10px auto;
		display: block;
		overflow: hidden;
		height: 400px;
		border-radius: 10px;
		box-shadow: 0px 0px 20px 5px rgba(5, 75, 86, 0.056);
		position: relative;
	}

	.dark .employee {
		box-shadow: 0px 0px 20px 5px rgba(59, 140, 153, 0.24);
	}

	.employee-image {
		height: 400px;
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
		transition: 0.5s;
	}

	.employee-image img {
		height: 100%;
	}

	.employee-name {
		color: #fff;
		font-weight: 500;
		padding: 10px;
		position: absolute;
		height: 120px;
		bottom: -61px;
		width: 100%;
		z-index: 50;
		transition: 0.9s;
	}

	.employee:hover > .employee-details .employee-name {
		transform: translateY(-50%);
	}

	.employee-social-link ul li {
		position: relative;
		bottom: -100px;
	}

	.employee-social-link ul {
		text-align: center;
		list-style: none;
	}

	.employee-social-link ul li {
		display: inline-block;
		margin: 7px;
		padding: 10px;
		border-radius: 50%;
		line-height: 0.1;
	}

	.employee-social-link i {
		font-size: 15px;
		color: #fff;
		animation-name: rotate-icon;
	}

	.employee-social-link ul li:nth-child(1) {
		transition: 0.8s;
	}

	.employee-social-link ul li:nth-child(2) {
		transition: 1.1s;
	}

	.employee:hover > .employee-details .employee-social-link ul li {
		bottom: 190px;
	}
</style>
