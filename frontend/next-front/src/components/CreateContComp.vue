<template>
    <div class="container-login">
        <h1>Criar Conta</h1>
        <form @submit.prevent="criarConta">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="user.nome" required placeholder="Seu nome" />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="user.email" required placeholder="Seu email" />
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" v-model="user.senha" required placeholder="Sua senha" />
            </div>
            <button type="submit">Criar Conta</button>
        </form>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'CreateContComp',
    data() {
        return {
            user: {
                nome: '',
                email: '',
                senha: ''
            }
        }
    },
    methods: {
        async criarConta() {
            try {
                await axiosInstance.post('/user', this.user);
                alert('Conta criada com sucesso!');
                this.$router.push({ name: 'Login' });
            } catch (error) {
                alert('Erro ao criar conta. Verifique os dados e tente novamente.');
            }
        }
    }
}
</script>

<style scoped>
.container-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 480px;
    background-color: #252525;
    border-radius: 10px;
    padding: 20px;
}

.container-login h1 {
    margin-bottom: 20px;
    font-size: 38px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    color:#b8b8b8
}

input {
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    background-color: #3a3a3a99;
    border: unset;
    margin-bottom: 10px;
}

button {
    width: 300px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background: linear-gradient(90deg, #ff39a6 0%, #ff8c3f 100%);
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}
</style>