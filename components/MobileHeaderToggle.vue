<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div
				v-show="modalActive"
				class="bg-black bg-opacity-50 fixed inset-0 md:hidden z-[999]">
				<Transition name="modal-inner">
					<div
						v-if="modalActive"
						class="backdrop-blur-[1px] h-full flex" @click="$emit('close-modal')">
						<div
							class=" p-5 w-[280px]  bg-white dark:bg-dark  flex flex-col gap-8 h-full overflow-y-auto hide__scroll relative">
							<Logo />
							<NavLinks />
						</div>
		
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	defineEmits(["close-modal"]);
	const props = defineProps({
		modalActive: {
			type: Boolean,
			default: false,
		},
		toggleModal: {
			type: Function,
			required: true,
		},
	});
</script>

<style scoped>
	.modal-outer-enter-active {
		transition: opacity 0.1s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}

	.modal-outer-leave-active {
		transition: opacity 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}

	.modal-outer-enter-from {
		opacity: 0.5;
	}

	.modal-outer-leave-to {
		opacity: 1;
	}

	.modal-inner-enter-active {
		transition: all 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0s;
	}

	.modal-inner-leave-active {
		transition: all 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}

	.modal-inner-enter-from {
		opacity: 0;
		transform: translateX(100%);
	}

	.modal-inner-leave-to {
		transform: translateX(100%);
	}

	[dir="ltr"] .modal-inner-enter-from,
	[dir="ltr"] .modal-inner-leave-to {
		transform: translateX(-100%);
	}
</style>
