<template>
    <div class="welcome-message">
        <h2>Welcome to vue course</h2>
        <p>We are Elzero Team</p>
    </div>
</template>

<script>
export default {
    name: "WelcomeMessage"
};
</script>

<style scoped lang="scss">
$fontSize: 50px;
$mainColor: red;

h2 {
    font-size: $fontSize;
    color: $mainColor;
}
</style>
