<template>
    <div class="container-login">
        <h1>Log In</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <!-- Links alinhados lado a lado -->
            <div class="login-links">
                <span @click="goToRedefi" class="login-link">
                    Esqueceu sua senha?
                </span>
                <span @click="goToCreateCont" class="login-link">
                    Criar conta
                </span>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
    name:'LoginComp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await axiosInstance.post('/user/login', {
                    email: this.email,
                    senha: this.password
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userName', response.data.usuario.nome);
                localStorage.setItem('userId', response.data.usuario._id);
                localStorage.setItem('isAdmin', response.data.usuario.isAdmin);
                this.$router.push({ name: 'Home' });
            } catch (error) {
                console.error("Erro ao fazer login:", error);
            }
        },
        goToRedefi() {
            this.$router.push({ name: 'Redefi' });
        },
        goToCreateCont() {
            this.$router.push({ name: 'CreateCont' });
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
    height: 450px;
    background-color: #252525;
    border-radius: 10px;
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

.login-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.login-link {
    color: #ff8c3f;
    cursor: pointer;
    text-decoration: underline;
    font-size: 15px;
    transition: color 0.2s;
}
.login-link:hover {
    color: #ff39a6;
}
</style>