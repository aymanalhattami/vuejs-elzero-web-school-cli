import Vue from "vue";

Vue.filter('uppercase', function (v){
    return v.toUpperCase();
});

Vue.filter('reverse', function(v){
    return v.splite("").reverse().join("");
});