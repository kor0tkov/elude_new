<script>
	import MainScreen from "../components/MainScreen";

	export default {
		name: 'index',
		components: {MainScreen},
		props: {
			results: Array
		}
	}
</script>

<template>
	<div class="index">
		<MainScreen/>
	</div>
</template>

<style lang='scss'>
	.index {
	}
</style>
