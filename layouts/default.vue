<template>
	<div id="layout">
		<BaseScrollTop />
		<LayoutHeader />
		<div class="flex-grow">
			<slot />
		</div>
		<LayoutFooter />
	</div>
</template>
<style scoped>
	#layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
	}
</style>
