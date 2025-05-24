<template>
    <HeaderComp :userInitial="'J'" />
    <div class="avaliacoes">
        <div class="avaliacoes-content">
            <NavBar :userInitial="'J'" class="navegation" />
            <div class="avaliacoes-main-content">
                <h1>Acompanhe por aqui suas avaliações!</h1>
                <div>
                    <AvaliacoesComp />
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
    import AvaliacoesComp from '../components/AvaliacoesComp.vue';

    export default {
        name: 'AvaliacoesView',
        components: {
            HeaderComp,
            NavBar,
            FooterComp,
            AvaliacoesComp
        }
    }

</script>
    
<style>
    .avaliacoes {
        display: flex;
        justify-content: center;
    }

    .avaliacoes-content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 0 50px 0;
        width: 95%;
    }

    .avaliacoes-main-content {
        width: 85%;
        flex: 1;
    }

    .avaliacoes-main-content > h1 {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }
</style>