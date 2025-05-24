<template>
    <HeaderComp :userInitial="'J'" />
    <div class="wishlist">
        <div class="wishcontent">
            <NavBar :userInitial="'J'" class="navegation" />
            <div class="wish-main-content">
                <h1>Acompanhe por aqui sua lista de desejos!</h1>
                <div>
                    <WishlistComp />
                </div>
            </div>
        </div>
    </div>
    <FooterComp />
</template>

<script>
    import HeaderComp from '../components/HeaderComp.vue';
    import NavBar from '../components/NavBar.vue';
    import WishlistComp from '../components/WishlistComp.vue';
    import FooterComp from '../components/FooterComp.vue';

    export default {
        name: 'WishlistView',
        components: {
            HeaderComp,
            NavBar,
            WishlistComp,
            FooterComp
        }
    }
</script>

<style>
    .wishlist {
        display: flex;
        justify-content: center;
    }

    .wishcontent {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 0 50px 0;
        width: 95%;
    }

    .wish-main-content {
        width: 85%;
        flex: 1;
    }

    .wish-main-content h1 {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }
</style>