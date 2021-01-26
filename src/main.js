import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './scss/main.scss';
import 'normalize.css';
import './fitlers'; // global filter

Vue.config.productionTip = false;

// global directive
// create custom directive called 'bold'
Vue.directive('bold', {
    bind: function(el){
        el.style.fontSize = "50px";
    }
});

// directive for font size called 'font'
Vue.directive('font', {
    bind: function (el, binding){
        el.style.fontSize = binding.value + "px";
    }
});

// custom directive to format the element called "format"
Vue.directive('format', {
    bind: function(el, binding){
        el.style.fontSize = binding.value + "px";

        // bold modifier to "format" directive
        if(binding.modifiers.bold){
            el.style.fontWeight = "bold";
        }

        // red modifier to "format" directive
        if(binding.modifiers.red){
            el.style.color = "red";
        }
    }
})

// vue instance
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
