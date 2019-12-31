<script>
	import MainScreen from "../components/MainScreen";
	import Join from "@/components/Join";

	export default {
		name: 'index',
		components: {Join, MainScreen},
		props: {
			results: Array
		},
  };
</script>

<template>
	<div class="index">
		<MainScreen class="index__main-screen" />
		<Join class="index__join" />
	</div>
</template>

<style lang='scss'>
.index {
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,600,700,800&display=swap');
	font-family: 'Montserrat', sans-serif;
	&__main-screen {
		position: absolute;
	}
	&__join {
		position: absolute;
	}
}
</style>
