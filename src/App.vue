<script>
  export default {
    name: 'app',
    data() {
      return {
        results: [],
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
        });
    }
  }
</script>

<template>
  <div class="app" id="app">
    <router-view :results="results"/>
  </div>
</template>

<style lang="scss">
html {
  /*overflow: hidden;*/
  /* ты полностью скролл на сайте выключил */
}
html,
body {
  padding: 0;
  margin: 0;
}
.app {
}
</style>
