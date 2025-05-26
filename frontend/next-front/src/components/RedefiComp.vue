<template>
    <div class="container-login">
        <h1>Redefinir Senha</h1>
        <form @submit.prevent="redefinirSenha">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="new-password">Nova Senha:</label>
                <input type="password" id="new-password" v-model="newPassword" required />
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirmar Nova Senha:</label>
                <input type="password" id="confirm-password" v-model="confirmPassword" required />
            </div>
            <button type="submit">Redefinir Senha</button>
        </form>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'RedefiComp',
    data() {
        return {
            email: '',
            newPassword: '',
            confirmPassword: ''
        }
    },
    methods: {
        async redefinirSenha() {
            if (this.newPassword !== this.confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            try {
                // Buscar usuário pelo email
                const response = await axiosInstance.get(`/user/email/${this.email}`);
                const user = response.data;
                if (!user || !user._id) {
                    alert('Usuário não encontrado!');
                    return;
                }
                // Atualizar senha
                await axiosInstance.put(`/user/${user._id}`, { senha: this.newPassword });
                alert('Senha redefinida com sucesso!');
                this.$router.push({ name: 'Login' });
            } catch (error) {
                alert('Erro ao redefinir senha.');
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
    width: 45%;
    height: 520px;
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
    padding: 15px;
    border-radius: 5px;
    background-color: #3a3a3a99;
    border: unset;
    margin-bottom: 10px;
}

button {
    width: 300px;
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    background: linear-gradient(90deg, #ff39a6 0%, #ff8c3f 100%);
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}
</style>