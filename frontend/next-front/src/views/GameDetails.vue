<template>
    <HeaderComp />
        <div class="game-details">
            <div class="game-details-content">
                <NavBar />
                <div class="game-details-infos">
                    <GameDetailsComp />
                </div>
        </div>
        <div class="page_art">
            <div class="art-wrapper">
                <div class="art"></div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import HeaderComp from '../components/HeaderComp.vue'
    import NavBar from '../components/NavBar.vue'
    import GameDetailsComp from '../components/GameDetailsComp.vue'

    export default{
        name: 'GameDetails',
        components: {
            HeaderComp,
            NavBar,
            GameDetailsComp
        },
    }
</script>

<style scoped>

    .game-details{
        display: flex;
        justify-content: center;
    }

    .game-details-content{
        display: flex;
        align-items: start;
        justify-content: center;
        padding: 20px 0px 50px 0px;
        width: 95%;
    }

    .game-details-infos{
        width: 85%;
        flex: 1;
    }


</style>