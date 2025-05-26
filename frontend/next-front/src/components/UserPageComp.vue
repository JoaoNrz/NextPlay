<template>
    <div class="userpage-container">
        <div class="inicial-infos-user">
            <h1>{{ user ? user.nome : 'NickName' }}</h1>
            <div class="user-icon">{{ user ? user.nome[0].toUpperCase() : 'J' }}</div>
        </div>
        <div class="links-user">
            <ul>
                <li><a href="/library">Biblioteca</a></li>
                <li><a href="/wishlist">WishList</a></li>
                <li><a href="/avaliacoes">Avaliações</a></li>
            </ul>
        </div>
        <div class="extra-msg-user">
            <p>
                Incremente sua biblioteca com jogos do Steam, PlayStation, Xbox ou GOG. Quanto mais completo for o seu perfil, melhor ele demonstra seus interesses.
            </p>
        </div>
        <div class="infos-user">
            <h2>Nome</h2>
            <p>{{ user ? user.nome : '' }}</p>
            <h2>Email:</h2>
            <p>{{ user ? user.email : '' }}</p>
            <h2>Senha:</h2>
            <p>********</p>
            <h2>Data de cadastro:</h2>
            <p>{{ user ? (new Date(user.dataCadastro).toLocaleDateString('pt-BR')) : '' }}</p>
            <div class="actions-user">
                <button @click="openEditModal">
                    <img src="../assets/images/editing.png" alt="">
                </button>
            </div>
        </div>
    </div>
    <div class="userpage-estatics">
        <div class="estatics-card"></div>
        <div class="estatics-card"></div>
        <div class="estatics-card"></div>
    </div>

    <!-- Modal de edição -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <h2>Editar Perfil</h2>
            <form @submit.prevent="editarUsuario">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input id="nome" v-model="editUser.nome" required type="text" placeholder="Nome do usuário" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input id="email" v-model="editUser.email" required type="email" placeholder="Email do usuário" />
                </div>
                <div class="form-group">
                    <label for="senha">Senha:</label>
                    <input id="senha" v-model="editUser.senha" type="password" placeholder="Nova senha (opcional)" />
                </div>
                <div class="modal-actions">
                    <button type="submit">Salvar</button>
                    <button type="button" @click="closeModal">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'UserPageComp',
    data() {
        return {
            user: null,
            showModal: false,
            editUser: {
                nome: '',
                email: '',
                senha: ''
            }
        }
    },
    async mounted() {
        const userId = this.$route.params.id;
        if (!userId) return;
        try {
            const response = await axiosInstance.get(`/user/${userId}`);
            this.user = response.data;
        } catch (error) {
            alert('Erro ao buscar dados do usuário');
        }
    },
    methods: {
        openEditModal() {
            this.editUser = {
                nome: this.user.nome,
                email: this.user.email,
                senha: ''
            };
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.editUser = { nome: '', email: '', senha: '' };
        },
        async editarUsuario() {
            const userId = this.$route.params.id;
            try {
                // Só envia senha se o campo não estiver vazio
                const payload = {
                    nome: this.editUser.nome,
                    email: this.editUser.email
                };
                if (this.editUser.senha) {
                    payload.senha = this.editUser.senha;
                }
                await axiosInstance.put(`/user/${userId}`, payload);
                // Atualiza os dados na tela
                this.user = { ...this.user, ...payload };
                this.closeModal();
                alert('Perfil atualizado com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar perfil');
            }
        }
    }
}
</script>

<style>
.userpage-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 20px 0 50px 0;
    gap: 20px;
    margin-left: 80px;
}

.inicial-infos-user {
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
    gap: 30px;
}

.inicial-infos-user h1 {
    font-size: 72px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}

.user-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(90deg, #ff39a6 0%, #ff8c3f 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 38px;
}

.links-user {
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
}

.links-user ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0px;
    margin: 0px;
    gap: 80px;
}

.links-user ul li {
    list-style: none;
}

.links-user ul li a {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
    padding-bottom: 2px;
    text-decoration: none;
    border-bottom: 2px solid white;
}

.extra-msg-user {
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
    margin: 20px 0;
    background: linear-gradient(rgb(253, 134, 125), rgb(177, 48, 92));
    padding: 20px 20px;
    border-radius: 10px;
}

.extra-msg-user p {
    font-size: 22px;
    font-weight: 400;
    color: #fff;
}

.infos-user {
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: start;
    gap: 10px;
    flex-direction: column;
    background-color: #2222229d;
    padding: 20px 20px;
    border-radius: 10px;
}

.actions-user {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 25px;
}

.actions-user button {
    border: none;
    cursor: pointer;
    padding: 8px 22px;
    border-radius: 5px;
    background-color: #3a3a3a4d;
}

/* Estilos do modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
    margin-top: 0;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.modal-actions button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.modal-actions button[type="submit"] {
    background-color: #28a745;
    color: #fff;
}

.modal-actions button[type="button"] {
    background-color: #dc3545;
    color: #fff;
}
</style>
