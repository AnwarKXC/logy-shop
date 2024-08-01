<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div
				v-if="isVisible"
				class="modal"
				:class="{ cent: center,'backdrop-blur-[1px]' : blur }"
				@click="handleBackdropClick">
				<Transition name="modal-inner">
					<div
						:class="modalClass"
						class="modal-content"
						@click.stop>
						<slot />
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	const props = defineProps({
		isVisible: {
			type: Boolean,
			required: true,
		},
		modalClass: {
			type: String,
			default: "rgba(0, 0, 0, 0.9)",
		},
		blur: {
			type: Boolean,
			default: false,
		},
		center: {
			type: Boolean,
			default: false,
		},
		bgClose: {
			type: Boolean,
			default: false,
		},
	});

	const emit = defineEmits(["update:isVisible"]);

	function hideModal() {
		emit("update:isVisible", false);
	}

	function handleBackdropClick() {
		if (props.bgClose) {
			hideModal();
		}
	}
</script>

<style scoped>
	.modal {
		position: fixed;
		z-index: 9999;
		inset: 0;
	}

	.modal-content {
		border-radius: 8px;
		padding: 20px;
	}

	.modal-outer-enter-active,
	.modal-outer-leave-active {
		transition: opacity 0.3s ease;
	}

	.modal-outer-enter-from,
	.modal-outer-leave-to {
		opacity: 0;
	}

	.modal-inner-enter-active,
	.modal-inner-leave-active {
		transition:
			transform 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02),
			opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}
</style>
