import Vue from "vue";

Vue.filter('uppercase', function (v){
    return v.toUpperCase();
});

Vue.filter('reverse', function(v){
    return v.split("").reverse().join("");
});

Vue.filter('shorten', function(value, textLength, suffix){
    return value.substring(0, textLength) + suffix;
});