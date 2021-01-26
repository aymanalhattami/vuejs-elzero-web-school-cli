<template>
    <div class="header">
        <div class="d-inline-block text-left logo">Elzero Web School</div>
        <div class="d-inline-block">
            <ul>
                <router-link tag="li" to="/" exact>
                    <a>Home</a>
                </router-link> |
                <router-link tag="li" to="/about">
                    <a>About</a>
                </router-link> | 
                <router-link tag="li" to="/help">
                    <a>Help</a>
                </router-link> | 
                <router-link tag="li" to="/blog">
                    <a>Blog</a>
                </router-link>
            </ul>
        </div>
        <div class="clear-fix"></div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header{
    background-color: #333;
    overflow: hidden;
    color: #ffffff !important;

    ul{
        list-style: none;
        padding: 20px !important;
    }

    li{
        display: inline-block;
    }

    a{
        color: #ffffff !important;
    }


}
</style>