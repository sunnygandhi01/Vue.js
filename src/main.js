import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from '../routes';


Vue.directive('highlight', {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }

        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value
            }
        }, delay)
    }
});

Vue.filter('toGlobalUpperCase', function (value) {
    return value.toUpperCase();
});

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited', age);
        },
        listQuoted(quotes) {
            this.$emit('quotesAdded', quotes)
        }
    }
});

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://vue-test-c7b2f-default-rtdb.firebaseio.com/data.json';

Vue.http.interceptors.push((request, next) => {
    console.log(request);
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(response => {
        response.json = () => { return { messages: response.body } }
    });
});

const router = new VueRouter({
    routes: routes,
    mode: 'history'

})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
