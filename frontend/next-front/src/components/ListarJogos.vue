<template>
    <div class="listgames">
        <div class="game-card-medium">
            <div class="game-card-medium-media">
                <img src="../assets/images/tlou2.jpg" alt="Game 1">
            </div>
            <div class="game-card-medium-info">
                <div class="game-card-info-plataforms">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div class="game-card-info-tittle">
                    <h1>The Last of Us Part 2</h1>
                </div>
                <div class="game-card-info-price">
                    <span>R$ 249,99</span>
                </div>
                <div class="game-card-actions">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListarJogos',
    }
</script>

<style scoped>
    .listgames {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        gap:30px;
        flex-wrap: wrap;
    }

    .game-card-medium{
        width: 30%;
        height: 300px;
        border-radius: 10px;
    }

    .game-card-medium-media{
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 10px 10px 0px 0px;
    }

    .game-card-medium-media img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .game-card-medium-info{
        padding: 8px 18px;
        background-color: #202020;
    }

    .game-card-info-plataforms{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      
    }

    .game-card-info-tittle h1{
        font-size: 26px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }

    .game-card-info-price span{
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 10px;
    }

    .game-card-actions{
        display: flex;
        justify-content: start;
        gap:10px;
        margin-top: 14px;
    }
</style>