<template>
    <div class="listgames">
        <div
            class="game-card-medium"
            v-for="game in libraryGames"
            :key="game.id"
        >
            <div class="game-card-medium-media">
                <img :src="getImageUrl(game.imagemURL)" :alt="game.titulo || game.title" />
            </div>
            <div class="game-card-medium-info">
                <div class="game-card-info-plataforms">
                    <img
                        v-for="platform in game.plataformas || game.platforms"
                        :key="platform"
                        :src="getPlatformIcon(platform)"
                        :alt="platform"
                    />
                </div>
                <div class="game-card-info-tittle">
                    <h1>{{ game.titulo || game.title }}</h1>
                </div>
                <div class="game-card-info-price">
                    <span>Adquirido</span>
                </div>
                <div class="game-card-actions">
                    <button id="btn-cart" @click="playGame(game)">
                        <span>Jogar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'LibraryComp',
    data() {
        return {
            libraryGames: []
        };
    },
    async mounted() {
        const userId = localStorage.getItem('userId');
        try {
            const response = await axiosInstance.get(`/user/${userId}/biblioteca`);
            this.libraryGames = response.data;
        } catch (error) {
            alert('Erro ao buscar biblioteca');
        }
    },
    methods: {
        getPlatformIcon(platform) {
            switch (platform.toLowerCase()) {
                case 'windows':
                    return require('../assets/images/windows.png');
                case 'xbox':
                    return require('../assets/images/xbox-logo.png');
                case 'playstation':
                    return require('../assets/images/playstation-logotype.png');
                default:
                    return '';
            }
        },
        getImageUrl(imagemURL) {
            if (!imagemURL) return '';
            if (imagemURL.startsWith('http')) return imagemURL;
            return `http://localhost:3000${imagemURL.startsWith('/') ? '' : '/'}${imagemURL}`;
        },
        playGame(game) {
            alert(`Iniciando ${game.titulo || game.title}...`);
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
    gap: 30px;
    flex-wrap: wrap;
}

.game-card-medium {
    width: 30%;
    background-color: #202020;
    border-radius: 10px;
}

.game-card-medium-media {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
}

.game-card-medium-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.game-card-medium-info {
    padding: 10px 18px;
    background-color: #202020;
    border-radius: 0px 0px 10px 10px;
}

.game-card-info-plataforms {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.game-card-info-plataforms img {
    max-width: 14px;
}

.game-card-info-tittle h1 {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}

.game-card-info-price span {
    font-size: 21px;
    font-weight: 400;
    color: #e4e4e4;
    margin-bottom: 10px;
}

.game-card-actions {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 0px;
    gap: 15px;
    margin-top: 14px;
}

#btn-cart {
    background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
    border: none;
    padding: 11px 20px;
    border-radius: 5px;
    cursor: pointer;
}

#btn-favorite {
    background-color: #313131;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 8px;
}

#btn-favorite img {
    max-width: 18px;
}

.game-card-actions button span {
    text-decoration: none;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
}
</style>