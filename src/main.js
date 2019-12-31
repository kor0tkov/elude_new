import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter);

Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f);
    },
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router: new VueRouter({
        routes
    })
}).$mount('#app');
