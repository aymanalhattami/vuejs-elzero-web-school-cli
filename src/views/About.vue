<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <welcome-message />

    <div class="row">
        <div class="col-md-4">one</div>
        <div class="col-md-4">two</div>
        <div class="col-md-4">two</div>
    </div>
  </div>
</template>

<script>
import WelcomeMessage from '@/components/WelcomeMessage.vue';

export default {
    data: function(){
        return {
            pageName: 'About Academy',
            pageDescription: "About us Page"
        }
    },
    components: {
        WelcomeMessage
    }
}
</script>
