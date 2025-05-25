<template>
    <div class="users-container">
        <div class="new-user-container">
            <button @click="showModal = true">Adicionar Usuário</button>
        </div>
        <div class="users-content">
            <div class="card-user" v-for="user in users" :key="user.email">
                <div class="user-info">
                    <h1>Nome:</h1>
                    <p>{{ user.nome }}</p>
                </div>
                <div class="user-info">
                    <h1>Email:</h1>
                    <p>{{ user.email }}</p>
                </div>
                <div class="user-info">
                    <h1>Administrador:</h1>
                    <span>{{ user.isAdmin ? 'Sim' : 'Não' }}</span>
                </div>
                <div class="actions">
                    <button id="edit-user" @click="openEditModal(user)">
    <img src="../assets/images/editing.png" alt="Editar">
</button>
                    <button id="exclude-user" @click="excluirUsuario(user._id)">
                        <img src="../assets/images/delete.png" alt="Excluir">
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <h2>Adicionar Usuário</h2>
                <form @submit.prevent="cadastrarUsuario">
                    <div class="form-group">
                        <label for="nome">Nome:</label>
                        <input id="nome" v-model="user.nome" required type="text" placeholder="Nome do usuário" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input id="email" v-model="user.email" required type="email" placeholder="Email do usuário" />
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha:</label>
                        <input id="senha" v-model="user.senha" required type="password" placeholder="Senha" />
                    </div>
                    <div class="form-group">
                        <label for="isAdmin">Administrador?</label>
                        <select id="isAdmin" v-model="user.isAdmin">
                            <option :value="false">Não</option>
                            <option :value="true">Sim</option>
                        </select>
                    </div>
                    <div class="modal-actions">
                        <button type="submit">Salvar</button>
                        <button type="button" @click="closeModal">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axiosInstance from '../services/axiosInstance.js';

export default {
    name: 'AllUsersComp',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            user: {
                nome: "",
                email: "",
                senha: "",
                isAdmin: false
            },
            showModal: false,
            isEditMode: false, // novo
            editUserId: null   // novo
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
            this.user = { nome: '', email: '', senha: '', isAdmin: false };
            this.isEditMode = false;
            this.editUserId = null;
        },
        async cadastrarUsuario() {
            try {
                if (this.isEditMode && this.editUserId) {
                    await axiosInstance.put(`/user/${this.editUserId}`, this.user);
                } else {
                    await axiosInstance.post('/user', this.user);
                }
                this.closeModal();
                this.user = {
                    nome: '',
                    email: '',
                    senha: '',
                    isAdmin: false
                };
                this.isEditMode = false;
                this.editUserId = null;
                this.$emit('usuario-cadastrado');
            } catch (error) {
                console.error('Erro ao salvar usuário:', error);
            }
        },
        async excluirUsuario(id) {
            try {
                await axiosInstance.delete(`/user/${id}`);
                this.$emit('usuario-cadastrado'); // Atualiza a lista após exclusão
            } catch (error) {
                console.error('Erro ao excluir usuário:', error);
            }
        },
        openEditModal(user) {
            this.isEditMode = true;
            this.editUserId = user._id;
            // Preenche o form com os dados do usuário
            this.user = {
                nome: user.nome,
                email: user.email,
                senha: '', // senha geralmente não é retornada, deixe em branco
                isAdmin: user.isAdmin
            };
            this.showModal = true;
        },
    }
}
</script>

<style>
.users-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:30px;
    gap: 20px;
}

.new-user-container{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.new-user-container button {
    background-color: #a3a3a315;
    color: #fff;
    padding: 20px 30px;
    border: 1px solid #ffffffe7;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
}

.users-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.card-user{
    width: 90%;
    background-color: #24242467;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.user-info h1{
    font-size: 21px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 8px;
}

.user-info p, .user-info span{
    font-size: 17px;
    font-weight: 400;
    color: #f3f3f3;
    margin-bottom: unset;
}

.actions{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 25px;
}

.actions button{
    border: none;
    cursor: pointer;
    padding: 8px 22px;
    border-radius: 5px;
}

#exclude-user{
    background: linear-gradient(90deg, #ff614c 0%, #ff9c3f 100%);
}

#edit-user{
    background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
}

.modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modal-content {
    background: #242424;
    padding: 32px 24px;
    border-radius: 12px;
    min-width: 800px;
    box-shadow: 0 2px 16px #00000055;
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.modal-content h2 {
    color: #fff;
    font-size: 22px;
    margin-bottom: 10px;
}
.form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 30px;
}
.form-group label {
    color: #fff;
    font-size: 17px;
    font-weight: 400;
}
.form-group input,
.form-group select {
    background: #1818188f;
    color: #fff;
    border: 1px solid #5e5e5e67;
    border-radius: 5px;
    padding: 15px;
    font-size: 14px;
}
.modal-actions {
    margin-top: 15px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}
.modal-actions button {
    background-color: #a3a3a333;
    color: #fff;
    padding: 12px 28px;
    border: 1px solid #5e5e5e67;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    transition: background 0.2s;
}
.modal-actions button[type="submit"] {
    background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
    border: none;
}
.modal-actions button[type="button"] {
    background: #444;
    border: none;
}
</style>