<template>
	<div class="city-lp">
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
        name: 'city-lp',
        props: {
            results: Array
        },
    }
</script>

<style lang='scss' src='./city-lp.scss'/>
