<template>
    <div class="container-details" v-if="jogo">
        <div class="details-core">
            <div class="details-core-init">
                <span class="data">{{ formatDate(jogo.dataLancamento) }}</span>
                <div class="details-core-imgs">
                    <img v-if="jogo.plataformas && jogo.plataformas.includes('PlayStation')" src="../assets/images/playstation-logotype.png" alt="">
                    <img v-if="jogo.plataformas && jogo.plataformas.includes('PC')" src="../assets/images/windows.png" alt="">
                    <img v-if="jogo.plataformas && jogo.plataformas.includes('Xbox')" src="../assets/images/xbox-logo.png" alt="">
                </div>
            </div>
            <div class="details-core-title">
                <h1>{{ jogo.titulo }}</h1>
            </div>
            <div class="details-core-actions">
                <button>Adicionar a lista de desejos</button>
                <button @click="irParaCheckout">Comprar</button>
            </div>
            <div class="details-core-infos">
                <h2>Sobre</h2>
                <p id="descript-game">{{ jogo.descricao }}</p>
                <div class="metacritic">
                    <h2>Metacritic</h2>
                    <p>{{ jogo.metacritic }}</p>
                </div>
                <div class="game-meta">
                    <div class="game-meta-block">
                        <div class="game-meta-title">Plataformas</div>
                        <div class="game-meta-text">{{ (jogo.plataformas || []).join(', ') }}</div>
                    </div>
                    <div class="game-meta-block">
                        <div class="game-meta-title">Categorias</div>
                        <div class="game-meta-text">{{ (jogo.categorias || []).join(', ') }}</div>
                    </div>
                    <div class="game-meta-block">
                        <div class="game-meta-title">Desenvolvedores</div>
                        <div class="game-meta-text">{{ (jogo.desenvolvedores || []).join(', ') }}</div>
                    </div>
                    <div class="game-meta-block">
                        <div class="game-meta-title">Preço</div>
                        <div class="game-meta-text">R$ {{ typeof jogo.preco === 'number' ? jogo.preco.toFixed(2) : '0.00' }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="details-extra">
            <div class="image-details">
                <img v-if="jogo.imagemURL" :src="getImageUrl(jogo.imagemURL)" :alt="jogo.titulo">
            </div>
            <p>
                Este jogo pode conter conteúdo impróprio para menores de idade. Verifique a classificação indicativa antes de prosseguir.
            </p>
        </div>
    </div>
    <div v-else>
        Carregando detalhes do jogo...
    </div>
    <div class="page__art">
        <div class="art-wrapper" style="height: 500px;">
            <div
  class="art art_colored"
  :style="artBackgroundStyle"
></div>
        </div>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
  name: 'GameDetails',
  data() {
    return {
      jogo: null
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      const response = await axiosInstance.get(`/jogos/${id}`);
      this.jogo = response.data;
    } catch (error) {
      console.error('Erro ao buscar detalhes do jogo:', error);
    }
  },
  computed: {
    artBackgroundStyle() {
      if (!this.jogo || !this.jogo.imagemURL) return {};
      const url = this.getImageUrl(this.jogo.imagemURL);
      return {
        backgroundImage: `
          linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),
          linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),
          url('${url}')
        `
      };
    }
  },
  methods: {
    getImageUrl(path) {
      if (!path) return '';
      if (path.startsWith('http')) return path;
      return `http://localhost:3000${path}`;
    },
    formatDate(dateStr) {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      return d.toLocaleDateString('pt-BR');
    },
    irParaCheckout() {
      this.$router.push({ name: 'Checkout', params: { id: this.jogo._id } });
    }
  }
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
        height: 500px;
        background-color: transparent;
        /* Não coloque background-image aqui */
        z-index: 1;
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