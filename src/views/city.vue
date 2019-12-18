<template>
	<div class="city">
		<h2>{{$route.params.city}}</h2>
		<ul v-if="results && results.length">
			<li v-for="(item, idx) in results" :key="idx">
				<div>{{item.LP_city}} ({{item.local_price}}$)</div>
				<b>{{item.from_location}} - {{item.to_location}}</b>
				<br>
				<br>
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: 'city',
        props: {
            results: Array
        }
    }
</script>

<style lang='scss'>
	.city {

	}
</style>
