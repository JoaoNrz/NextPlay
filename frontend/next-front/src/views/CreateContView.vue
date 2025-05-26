<template>
    <div class="container-main-login">
        <CreateContComp />
    </div>
</template>

<script>
import CreateContComp from '../components/CreateContComp.vue';
export default {
    name: 'CreateContView',
    components: {
        CreateContComp
    }
}
</script>

<style>
.container-main-login {
    background: linear-gradient(90deg, #292929eb 0%, #0f0f0f 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>