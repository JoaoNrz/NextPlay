<template>
    <div class="checkout-container-view">
        <CheckoutComp />
    </div>

</template>

<script>
    import CheckoutComp from '../components/CheckoutComp.vue';

    export default {
        name: 'CheckoutView',
        components: {
            CheckoutComp
        },
    }
</script>

<style>
    .checkout-container-view {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

</style>