<template>
	<div class="index">
		<MainScreen/>
	</div>
</template>

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

<style lang='scss'>
	.index {
	}
</style>
