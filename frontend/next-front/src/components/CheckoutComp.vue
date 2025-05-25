<template>
    <div class="checkout-container">
        <div class="checkout-info">
            <h2 class="checkout-title">Finalizar Compra</h2>
            <div class="game-details">
                <h3 class="game-title">{{ jogo ? jogo.titulo : '' }}</h3>
                <p class="game-desc">{{ jogo ? jogo.descricao : '' }}</p>
                <p class="game-price">Preço a ser pago: <span>R$ {{ jogo ? (typeof jogo.preco === 'number' ? jogo.preco.toFixed(2) : '0.00') : '' }}</span></p>
            </div>
            <div class="payment-method">
                <label for="payment-select">Método de Pagamento:</label>
                <select id="payment-select">
                    <option value="credit">Cartão de Crédito</option>
                    <option value="pix">PIX</option>
                    <option value="boleto">Boleto Bancário</option>
                </select>
            </div>
            <button class="checkout-btn" @click="finalizarCompra">Finalizar Compra</button>
        </div>
        <div class="checkout-image">
            <img v-if="jogo && jogo.imagemURL" :src="getImageUrl(jogo.imagemURL)" alt="Imagem do Jogo" />
            <p>Ao comprar voce aceita nossos termos e diretrizes.</p>
            <p>Após finalizar a compra, seu novo jogo estará disponível em sua biblioteca. Caso não apareça imediatamente, por favor entre em contato com nosso suporte.</p>
        </div>
    </div>

</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
  name: 'CheckoutComp',
  data() {
    return {
      jogo: null
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    if (id) {
      try {
        const response = await axiosInstance.get(`/jogos/${id}`);
        this.jogo = response.data;
      } catch (error) {
        console.error('Erro ao buscar jogo para checkout:', error);
      }
    }
  },
  methods: {
    getImageUrl(imagemURL) {
      if (!imagemURL) return '';
      if (imagemURL.startsWith('http')) return imagemURL;
      return `http://localhost:3000${imagemURL.startsWith('/') ? '' : '/'}${imagemURL}`;
    },
    async finalizarCompra() {
      const userId = localStorage.getItem('userId');
      if (!userId || !this.jogo || !this.jogo._id) {
        alert('Usuário ou jogo não encontrado!');
        return;
      }
      try {
        await axiosInstance.put(`/user/${userId}/biblioteca/${this.jogo._id}`);
        alert('Compra realizada! Jogo adicionado à sua biblioteca.');
        this.$router.push({ name: 'Library' }); // Ajuste o nome da rota conforme seu router
      } catch (error) {
        alert('Erro ao finalizar compra.');
      }
    }
  }
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