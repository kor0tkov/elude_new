<script>
    import Index from "./views/index";

    export default {
        name: 'app',
        components: {Index},
        data() {
            return {
                results: [],
            }
        },
        methods: {
            async CSVtoJSON(arr) {
                const parsed = arr.split('\r\n').map(line => line.split(','));
                let nav = parsed[0];
                nav = nav.map(el => el.replace(/ /g, "_"));

                for (let i = 1; i < parsed.length; i++) {
                    const line = parsed[i];
                    if (line.length === 1) return;
                    let obj = {};
                    line.forEach((col, idx) => {
                        const navKey = nav[idx];
                        obj[navKey] = col;
                    });
                    this.results.push(obj);
                }
            },
            async getData(url) {
                const xhttp = await new XMLHttpRequest();
                return new Promise(async resolve => {
                    xhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            resolve(this.responseText)
                        }
                    };
                    await xhttp.open("GET", url, true);
                    await xhttp.send();
                });
            },
            filterByCity(name) {
                if (!name) return;
                const low = (word) => word.toLowerCase();
                return this.results.filter(({LP_city}) => low(LP_city) === low(name))
            }
        },
        async mounted() {
            const cityName = window.city || '';
            await this.getData(`/data/lpData.csv`)
                .then(async result => {
                    await this.CSVtoJSON(result);
                    if (cityName) this.results = this.filterByCity(cityName);
                    else return this.results;
                });
        }
    }
</script>

<template>
	<div class="app" id="app">
		<Index :results="results"/>
	</div>
</template>

<style lang="scss">
	html {
		overflow: hidden;
		max-width: 100%;
		min-width: 320px;

		@media (min-width: 980px) {
			overflow-y: auto;
		}
	}

	html,
	body,
	h1, h2, h3,
	p {
		padding: 0;
		margin: 0;
	}

	.app {
	}
</style>
