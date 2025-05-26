<template>
    <div class="container-main-login">
        <RedefiComp />
    </div>
</template>

<script>
import RedefiComp from '../components/RedefiComp.vue';
export default {
    name: 'RedefiView',
    components: {
        RedefiComp
    }
}
</script>

<style>
.container-main-login {
    background: linear-gradient(90deg, #00000091 0%, #0f0f0f 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>