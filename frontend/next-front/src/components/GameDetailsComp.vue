<template>
    <div class="container-details">
        <div class="details-core">
            <div class="details-core-init">
                <span class="data">14/04/2002</span>
                <div class="details-core-imgs">
                    <img src="../assets/images/playstation-logotype.png" alt="">
                    <img src="../assets/images/windows.png" alt="">
                </div>
            </div>
            <div class="details-core-title">
                <h1>The Last of Us Part II</h1>
            </div>
            <div class="details-core-actions">
                <button>Adicionar a lista de desejos</button>
                <button>Comprar</button>
            </div>
            <div class="details-core-infos">
                <h2>About</h2>
                <p id="descript-game">Play the winner of over 300 Game of the Year awards, now remastered for the PlayStation®5 console. Experience for the first time or relive Ellie and Abby’s story with graphical enhancements, new gameplay modes like the roguelike survival experience No Return, full DualSense™ wireless controller integration, and more.</p>
                 <div class="metacritic">
                    <h2>Metacritic</h2>
                    <p>93</p>
                </div>
                <div class="game-meta">
                    <div class="game-meta-block">
                        <div class="game-meta-title">Plataformas</div>
                        <div class="game-meta-text">PC,PlayStation®5</div>
                    </div>
                    <div class="game-meta-block">
                        <div class="game-meta-title">Generos</div>
                        <div class="game-meta-text">Action, Adventure</div>
                    </div>
                    <div class="game-meta-block">
                        <div class="game-meta-title">Desenvolvedores</div>
                        <div class="game-meta-text">Naughty Dog,Iron Galaxy Studios,Nixxes software</div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="details-extra">
            <div class="image-details">
                <img src="../assets/images/tlouComplete.jpg" alt="">
            </div>
           
            <p>
                Este jogo pode conter conteúdo impróprio para menores de idade. Verifique a classificação indicativa antes de prosseguir.
            </p>

        </div>
    </div>
    <div class="page__art">
        <div class="art-wrapper" style="height: 500px;">
            <div class="art art_colored"></div>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'GameDetailsComp',
    }
</script>

<style scoped>
    .container-details{
        display: flex;
        justify-content: center;
        align-items: start;
        width: 100%;
        flex-direction: row;
    }

    .details-core{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
    }

    .details-extra{
        width: 30%;
    }

    .details-core-init{
        display: flex;
        justify-content: start;
        gap: 20px;
        width: 100%;
        align-items: center;
    }

    .details-core-init .data{
        font-size: 16px;
        color: #272727;
        font-weight: 500;
        padding: 2px 12px;
        background-color: rgb(245, 245, 245);
        border-radius: 3px;
        font-weight: 300;
        letter-spacing: .3px;
    }

    .details-core-imgs{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .details-core-title{
        display: flex;
        justify-content: start;
        align-items: center;
        text-align: start;
        width: 100%;
        margin-bottom: 10px;
    }

    .details-core-title h1{
        font-size: 72px;
        line-height: 74px;
        font-weight: 700;
        max-width: 70%;
    }

    .details-core-actions{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
        width: 100%;
    }

    .details-core-actions button{
        padding: 15px 30px;
        background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        font-weight: bold;
    }

    .details-core-infos{
        margin-top: 10px;
    }

    .details-core-infos h2{
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    #descript-game{
        font-size: 17px;
        font-weight: 300;
        color: #f3f3f3;
    }

    .game-meta {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
    }

    .game-meta-block {
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 50px;
    }

    .game-meta-title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.2);
}

    .game-meta-text{
        font-size: 16px;
        line-height: 1.5;
    }

    .page__art {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        width: 100%;
        height: 100%;
    }

    .art-wrapper{
        height: 500px;
    }

    .art_colored
    {
        max-height: 100%;
        background-size: cover;
    }

    .art {
        width: 100%;
        height: 100%;
        background: no-repeat top;
        background-size: cover;
        -webkit-transition: background .3s;
        transition: background .3s;
    }

    .art_colored{
            height: 500px;
                    background-color: transparent;
                    background-image:
                        linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),
                        linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),
                        url('https://media.rawg.io/media/resize/1280/-/games/d09/d099b508a1cfb5bd2f2928b50e0784a5.jpg');
                    z-index: 1
    }

    .details-extra{
        width: 40%;
    }

    .image-details{
        width: 420px;
        height: 220px;
        border-radius: 6px;
        overflow: hidden;
    }

    .image-details img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .metacritic{
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .metacritic h2{
        font-size: 17px;
        font-weight: 400;
        color: #999999;
    }

    .metacritic p{
        font-size: 22px;
        font-weight: 400;
        color: #ebebeb;
    }

    .details-extra p{
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        margin-top: 20px;
        max-width: 400px;
        word-break: break-word;
    }
</style>