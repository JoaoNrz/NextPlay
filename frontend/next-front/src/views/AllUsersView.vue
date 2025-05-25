<template>
    <HeaderComp :userInitial="'J'" />
    <div class="usuarios">
        <div class="usuarios-content">
            <NavBar :userInitial="'J'" class="navegation" />
            <div class="usuarios-main-content">
                <h1>Veja todos os usuários cadastrados!</h1>
                <div>
                    <AllUsersComp :users="ListaUsers" @usuario-cadastrado="getUsers" />
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
import AllUsersComp from '../components/AllUsersComp.vue';

import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'AllUsersView',
    components: {
        HeaderComp,
        NavBar,
        FooterComp,
        AllUsersComp
    },
    data(){
        return{
            ListaUsers: []
        }
    },
    async mounted(){
        await this.getUsers();
    },
    methods:{
        async getUsers(){
            try {
                const response = await axiosInstance.get('/user');
                this.ListaUsers = response.data;
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        }
    }
}
</script>

<style>
.usuarios {
    display: flex;
    justify-content: center;
}

.usuarios-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 0 50px 0;
    width: 95%;
}

.usuarios-main-content {
    width: 85%;
    flex: 1;
}

.usuarios-main-content > h1 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}
</style>