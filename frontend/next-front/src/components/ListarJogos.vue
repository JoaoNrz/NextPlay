<template>
    <div class="listgames">
        <div class="game-card-medium">
            <div class="game-card-medium-media">
                <img src="../assets/images/tlou2.jpg" alt="Game 1">
            </div>
            <div class="game-card-medium-info">
                <div class="game-card-info-plataforms">
                    <img src="../assets/images/windows.png" alt="">
                    <img src="../assets/images/xbox-logo.png" alt="">
                    <img src="../assets/images/playstation-logotype.png" alt="">
                </div>
                <div class="game-card-info-tittle">
                    <h1>The Last of Us Part 2</h1>
                </div>
                <div class="game-card-info-price">
                    <span>R$ 249,99</span>
                </div>
                <div class="game-card-actions">
                    <button id="btn-favorite">
                        <img src="../assets/images/heart.png" alt="">
                    </button>
                    <button id="btn-cart">
                        <a href="">Comprar</a>
                    </button>
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
        background-color: #202020;
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
        padding: 10px 18px;
        background-color: #202020;
        border-radius: 0px 0px 10px 10px;
    }

    .game-card-info-plataforms{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      
    }

    .game-card-info-plataforms img{
        max-width: 14px;
    }

    .game-card-info-tittle h1{
        font-size: 26px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }

    .game-card-info-price span{
        font-size: 21px;
        font-weight: 400;
        color: #e4e4e4;
        margin-bottom: 10px;
    }

    .game-card-actions{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 10px 0px;
        gap:15px;
        margin-top: 14px;
    }

    #btn-cart{
        background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
        border: none;
        padding: 11px 20px;
        border-radius: 5px;
        cursor: pointer;
        
    }

    #btn-favorite{
        background-color: #313131;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 5px 8px;
    }

    #btn-favorite img{
        max-width: 18px;
    }

    .game-card-actions button a{
        text-decoration: none;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px ;
        font-weight: bold;
    }
</style>