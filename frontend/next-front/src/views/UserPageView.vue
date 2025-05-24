<template>
    <HeaderComp :userInitial="'J'" />
    <div class="userpage">
        <div class="userpage-content">
            <NavBar :userInitial="'J'" class="navegation" />
            <div class="userpage-main-content">
                <div>
                    <UserPageComp />
                </div>
            </div>
        </div>
    </div>
    <FooterComp />
</template>

<script>
    import HeaderComp from '../components/HeaderComp.vue';
    import NavBar from '../components/NavBar.vue';
    import FooterComp from '../components/FooterComp.vue';
    import UserPageComp from '../components/UserPageComp.vue';

    export default {
        name: 'UserPageView',
        components: {
            HeaderComp,
            NavBar,
            FooterComp,
            UserPageComp
        }
    }
</script>

<style>
    .userpage {
        display: flex;
        justify-content: center;
    }

    .userpage-content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 0 50px 0;
        width: 95%;
    }

    .userpage-main-content {
        width: 65%;
        flex: 1;
    }
</style>