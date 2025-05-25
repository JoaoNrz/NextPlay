<template>
    <div class="listgames">
        <div class="game-card-medium" v-for="jogo in wishlist" :key="jogo._id">
            <div class="game-card-medium-media">
                <img :src="getImageUrl(jogo.imagemURL)" :alt="jogo.titulo">
            </div>
            <div class="game-card-medium-info">
                <div class="game-card-info-plataforms">
                    <img src="../assets/images/windows.png" alt="">
                    <img src="../assets/images/xbox-logo.png" alt="">
                    <img src="../assets/images/playstation-logotype.png" alt="">
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
                    <span>R$ {{ jogo.preco.toFixed(2).replace('.', ',') }}</span>
                </div>
                <div class="game-card-actions">
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
    name: 'WishlistComp',
    data() {
        return {
            wishlist: []
        }
    },
    async mounted() {
        const userId = localStorage.getItem('userId');
        try {
            const response = await axiosInstance.get(`/user/${userId}/wishlist`);
            this.wishlist = response.data;
        } catch (error) {
            alert('Erro ao buscar wishlist');
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
        }
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
        cursor: pointer;
    }

    .game-card-info-price span{
        font-size: 21px;
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

    .game-card-actions {
        display: flex;
        justify-content: start;
        gap: 15px;
        margin-top: 14px;
    }

    .game-card-actions button a{
        text-decoration: none;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px ;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }

    .game-title-link {
        color: #fff;
        text-decoration: none;
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 10px;
        cursor: pointer;
        display: inline-block;
        transition: text-decoration 0.2s;
    }
    .game-title-link:hover {
        text-decoration: underline;
    }

    #btn-cart {
        background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
        border: none;
        padding: 11px 20px;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        transition: background 0.2s;
        margin-left: 0;
    }
    #btn-cart:hover {
        filter: brightness(1.1);
    }
</style>