<template>
    <HeaderComp :userInitial="'J'" />
    <div class="games">
        <div class="games-content">
            <NavBar :userInitial="'J'" class="navegation" />
            <div class="games-main-content">
                <h1>Veja todos os jogos cadastrados!</h1>
                <div>
                    <AllGamesComp :games="listadeJogos" @jogo-cadastrado="getAllGames"/>
                </div>
            </div>
        </div>
    </div>
    <FooterComp />
</template>

<script>

import HeaderComp from '../components/HeaderComp.vue';
import NavBar from '../components/NavBar.vue';
import FooterComp from '../components/FooterComp.vue';
import AllGamesComp from '../components/AllGamesComp.vue';

import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'AllGamesView',
    components: {
        HeaderComp,
        NavBar,
        FooterComp,
        AllGamesComp
    },
    data(){
        return{
            listadeJogos: []
        }
    },
    async mounted(){
        await this.getAllGames();
    },
    methods:{
        async getAllGames() {
            try {
                const response = await axiosInstance.get('/jogos');
                this.listadeJogos = response.data;
            } catch (error) {
                console.error('Erro ao buscar jogos:', error);
            }
        }
    }

}
</script>

<style>
.games {
    display: flex;
    justify-content: center;
}

.games-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 0 50px 0;
    width: 95%;
}

.games-main-content {
    width: 85%;
    flex: 1;
}

.games-main-content > h1 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}
</style>