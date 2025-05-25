<template>
    <div class="listgames">
        <div class="game-card-medium" v-for="jogo in jogos" :key="jogo._id">
            <div class="game-card-medium-media">
                <img :src="getImageUrl(jogo.imagemURL)" :alt="jogo.titulo">
            </div>
            <div class="game-card-medium-info">
                <div class="game-card-info-plataforms">
                    <img v-if="jogo.plataformas.includes('PC')" src="../assets/images/windows.png" alt="">
                    <img v-if="jogo.plataformas.includes('Xbox')" src="../assets/images/xbox-logo.png" alt="">
                    <img v-if="jogo.plataformas.includes('PlayStation')" src="../assets/images/playstation-logotype.png" alt="">
                </div>
                <div class="game-card-info-tittle">
                    <router-link
                        :to="{ name: 'Details', params: { id: jogo._id } }"
                        class="game-title-link"
                    >
                        {{ jogo.titulo }}
                    </router-link>
                </div>
                <div class="game-card-info-price">
                    <span>R$ {{ typeof jogo.preco === 'number' ? jogo.preco.toFixed(2) : '0.00' }}</span>
                </div>
                <div class="game-card-actions">
                    <button id="btn-favorite" @click="addToWishlist(jogo._id)">
                        <img src="../assets/images/heart.png" alt="">
                    </button>
                    <button id="btn-cart" @click="irParaCheckout(jogo._id)">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'ListarJogos',
    data() {
        return {
            jogos: []
        }
    },
    async mounted() {
        try {
            const response = await axiosInstance.get('/jogos');
            this.jogos = response.data;
        } catch (error) {
            console.error('Erro ao buscar jogos:', error);
        }
    },
    methods: {
        getImageUrl(path) {
            if (!path) return '';
            if (path.startsWith('http')) return path;
            return `http://localhost:3000${path}`;
        },
        irParaCheckout(id) {
            this.$router.push({ name: 'Checkout', params: { id } });
        },
        async addToWishlist(jogoId) {
            const userId = localStorage.getItem('userId'); 
            try {
                await axiosInstance.put(`/user/${userId}/wishlist/${jogoId}`);
                // Opcional: mostrar mensagem de sucesso ou atualizar a lista
                alert('Jogo adicionado à wishlist!');
            } catch (error) {
                alert('Erro ao adicionar à wishlist');
            }
        },
    }
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
        height: 220px; /* Altura fixa para todas as imagens */
        overflow: hidden;
        border-radius: 10px 10px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .game-card-medium-media img{
        width: 100%;
        height: 100%;
        object-fit: cover; /* Mantém o corte centralizado e proporcional */
        display: block;
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

    #btn-cart {
    background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
    border: none;
    padding: 11px 20px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff; /* cor do texto */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
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
    .game-title-link {
  color: #fff;
  text-decoration: none;
  font-size: 26px;
  font-weight: bold;
}
.game-title-link:hover {
  text-decoration: underline;
}
</style>