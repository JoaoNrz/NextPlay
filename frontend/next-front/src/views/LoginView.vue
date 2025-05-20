<template>
    <div class="container-main-login">
        <LoginComp />
    </div>
    
</template>

<script>
    import LoginComp from '../components/LoginComp.vue';
    export default {
        name: 'LoginView',
        components: {
            LoginComp
        }
    }
</script>

<style>
    .container-main-login{
        background: linear-gradient(90deg, #292929eb 0%, #0f0f0f 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

</style>