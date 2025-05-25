<template>
    <HeaderComp :userInitial="'J'" />
    <div class="library">
        <div class="library-content">
            <NavBar :userInitial="'J'" class="navegation" />
            <div class="library-main-content">
                <h1>Acompanhe por aqui sua biblioteca!</h1>
                <div>
                    <LibraryComp />
                </div>
            </div>
        </div>
    </div>
    <FooterComp />
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import NavBar from '../components/NavBar.vue';
import LibraryComp from '../components/LibraryComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
    name: 'LibraryView',
    components: {
        HeaderComp,
        NavBar,
        LibraryComp,
        FooterComp
    }
}
</script>

<style>
.library {
    display: flex;
    justify-content: center;
}

.library-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 0 50px 0;
    width: 95%;
}

.library-main-content {
    width: 85%;
    flex: 1;
}

.library-main-content h1 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}
</style>