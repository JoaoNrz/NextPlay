<template>
    <div class="checkout-container">
        <div class="checkout-info">
            <h2 class="checkout-title">Finalizar Compra</h2>
            <div class="game-details">
                <h3 class="game-title">The Last of Us Part II</h3>
                <p class="game-desc">Play the winner of over 300 Game of the Year awards, now remastered for the PlayStation®5 console. Experience for the first time or relive Ellie and Abby’s story with graphical enhancements, new gameplay modes like the roguelike survival experience No Return, full DualSense™ wireless controller integration, and more.</p>
                <p class="game-price">Preço a ser pago: <span>R$ 199,90</span></p>
            </div>
            <div class="payment-method">
                <label for="payment-select">Método de Pagamento:</label>
                <select id="payment-select">
                    <option value="credit">Cartão de Crédito</option>
                    <option value="pix">PIX</option>
                    <option value="boleto">Boleto Bancário</option>
                </select>
            </div>
            <button class="checkout-btn">Finalizar Compra</button>
        </div>
        <div class="checkout-image">
            <img src="../assets/images/tlou2.jpg" alt="Imagem do Jogo" />
            <p>Ao comprar voce aceita nossos termos e diretrizes.</p>
            <p>Após finalizar a compra, seu novo jogo estará disponível em sua biblioteca. Caso não apareça imediatamente, por favor entre em contato com nosso suporte.</p>
        </div>
    </div>

</template>

<script>
    export default{
        name:'CheckoutComp',
    }
</script>

<style>
    .checkout-container {
        display: flex;
        background-color: rgba(46, 46, 46, 0.603);
        width: 80%;
        height: 90%;
        border-radius: 10px;
    }

    .checkout-info{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start ;
        gap:20px;
        padding-left: 80px;
    }

    .checkout-title{
        font-size: 42px;
        color: #fff;
        margin-bottom: 10px;
    }

    .game-details{
        padding: 20px 0px;
        border-bottom: 1px solid #41414141;
    }

    .game-title{
        font-size: 34px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: 400;
    }

    .game-desc{
        font-size: 15px;
        color: #cccccc;
        margin-bottom: 10px;
        font-weight: 300;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 60px;
        max-width: 500px;
    }

    .game-price{
        font-size: 16px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: 400;
        margin-top: 20px;
    }

    .game-price span{
        font-size: 20px;
        color: #ffffff;
        font-weight: 600;
        margin-left: 5px;
    }

    .payment-method{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 16px;
        color: #fff;
        border-bottom: 1px solid #41414141;
        padding-bottom: 20px;
    }

    .payment-method label{
        font-size: 18px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: 400;
    }
    .payment-method select{
        padding: 15px;
        border-radius: 5px;
        border: none;
        background-color: #414141;
        color: #fff;
        font-size: 16px;
    }

    .checkout-btn{
        padding: 20px 30px;
        border-radius: 5px;
        border: none;
        background: linear-gradient(90deg, #31c5ff 0%, #4d8bff 100%);
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .checkout-image{
        padding: 30px;
    }

    .checkout-image img{
        border-radius: 8px;
    }

    .checkout-image p{
        font-size:16px;
        color:rgba(204, 204, 204, 0.812);
        font-weight: 300;
        margin-top: 10px;
    }
</style>