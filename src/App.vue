<template>
	<div class="app" id="app">
		<router-view :results="results"/>
	</div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                results: [],
                options: {
                    delimiter: ",",	// auto-detect
                    newline: "\r\n",	// auto-detect
                    quoteChar: '"',
                    escapeChar: '"',
                    header: false,
                    transformHeader: undefined,
                    dynamicTyping: false,
                    preview: 0,
                    encoding: "",
                    worker: false,
                    comments: false,
                    step: undefined,
                    complete: undefined,
                    error: undefined,
                    download: false,
                    downloadRequestHeaders: undefined,
                    skipEmptyLines: false,
                    chunk: undefined,
                    fastMode: undefined,
                    beforeFirstChunk: undefined,
                    withCredentials: undefined,
                    transform: undefined,
                    delimitersToGuess: [',', '\t', '|', ';']

                },
                readyState: '',
                status: 0
            }
        },
        methods: {
            async CSVtoJSON(arr) {
                const parsed = arr.split('\n').map(line => line.split(','));
                let nav = parsed[0];
                nav = nav.map(el => el.replace(/ /g, "_"));
                // eslint-disable-next-line no-console
                console.log(nav[nav.length - 1]);

                for (let i = 1; i < parsed.length; i++) {
                    const line = parsed[i];
                    if (line.length === 1) return;
                    let obj = {};
                    line.forEach((col, idx) => {
                        obj[nav[idx]] = col;
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
                const low = (word) => word.toLowerCase();
                return this.results.filter(({LP_city}) => low(LP_city) === low(name))
            }
        },
        async mounted() {
            const fileName = 'lpData';
            await this.getData(`/data/${fileName}.csv`)
                .then(async result => {
                    await this.CSVtoJSON(result);
                    const name = this.$route.params.city;
                    this.results = this.filterByCity(name);
                    // eslint-disable-next-line no-console
                    console.log(this.results);
                });
        }
    }
</script>
