<template>
    <div class="out-help">
        <h1 v-colorRed>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    name: 'help',

    data: function(){
        return {
            pageName: 'Help Center',
            pageDescription: "Help Center Page"
        };
    },

    directives: {
        colorRed: {
            bind: function(el){
                el.style.color = "red";
            }
        }
    }
}
</script>