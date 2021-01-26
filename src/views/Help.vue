<template>
    <div class="out-help">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            pageName: 'Help Center',
            pageDescription: "Help Center Page"
        };
    },
    name: 'help'
}
</script>