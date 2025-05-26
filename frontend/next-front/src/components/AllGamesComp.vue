<template>
    <div class="games-container">
        <div class="new-game-container">
            <button @click="openAddModal">Adicionar Jogo</button>
        </div>
        <div class="games-content">
            <div class="card-game" v-for="game in games" :key="game.titulo">
                <div class="card-header">
                    <img
  v-if="game.imagemURL"
  :src="getImageUrl(game.imagemURL)"
  alt="Capa do jogo"
  class="game-img"
/>
                    <div class="main-info">
                        <h2>{{ game.titulo }}</h2>
                        <div class="info-row">
                            <span>R$ {{ typeof game.preco === 'number' ? game.preco.toFixed(2) : '0.00' }}</span>
                            <span>Metacritic: {{ game.metacritic }}</span>
                            <span>Lançamento: {{ formatDate(game.dataLancamento) }}</span>
                        </div>
                    </div>
                </div>
                <div class="desc-row" v-if="game.descricao">
                    <span>{{ game.descricao }}</span>
                </div>
                <div class="tags-row">
                    <div v-if="game.categorias && game.categorias.length" class="tag-group">
                        <strong>Categorias:</strong>
                        <span class="tag" v-for="cat in game.categorias" :key="cat">{{ cat }}</span>
                    </div>
                    <div v-if="game.desenvolvedores && game.desenvolvedores.length" class="tag-group">
                        <strong>Devs:</strong>
                        <span class="tag" v-for="dev in game.desenvolvedores" :key="dev">{{ dev }}</span>
                    </div>
                    <div v-if="game.plataformas && game.plataformas.length" class="tag-group">
                        <strong>Plataformas:</strong>
                        <span class="tag" v-for="plat in game.plataformas" :key="plat">{{ plat }}</span>
                    </div>
                </div>
                <div class="actions">
                    <button id="edit-game" @click="openEditModal(game)">
    <img src="../assets/images/editing.png" alt="Editar">
</button>
                    <button id="exclude-game" @click="excluirJogo(game._id)">
                        <img src="../assets/images/delete.png" alt="Excluir">
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content modal-add-game">
                <h2>Adicionar Jogo</h2>
                <form @submit.prevent="cadastrarjogo">
    <div class="form-columns">
        <div class="form-group">
            <label for="titulo">Título:</label>
            <input id="titulo" v-model="jogo.titulo" required type="text" placeholder="Título do jogo" />
        </div>
        <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input id="descricao" v-model="jogo.descricao" type="text" placeholder="Descrição do jogo" />
        </div>
        <!-- Removido o campo de URL da Imagem -->
        <div class="form-group">
            <label for="dataLancamento">Data de Lançamento:</label>
            <input id="dataLancamento" v-model="jogo.dataLancamento" type="date" />
        </div>
        <div class="form-group">
            <label for="preco">Preço:</label>
            <input id="preco" v-model.number="jogo.preco" required type="number" min="0" step="0.01" placeholder="Preço" />
        </div>
        <div class="form-group">
            <label for="categorias">Categorias (separadas por vírgula):</label>
            <input id="categorias" v-model="jogo.categorias" type="text" placeholder="Ação, Aventura, ..." />
        </div>
        <div class="form-group">
            <label for="desenvolvedores">Desenvolvedores (separados por vírgula):</label>
            <input id="desenvolvedores" v-model="jogo.desenvolvedores" type="text" placeholder="Dev1, Dev2, ..." />
        </div>
        <div class="form-group">
            <label for="plataformas">Plataformas (separadas por vírgula):</label>
            <input id="plataformas" v-model="jogo.plataformas" type="text" placeholder="PC, PS5, ..." />
        </div>
        <div class="form-group">
            <label for="metacritic">Metacritic:</label>
            <input id="metacritic" v-model.number="jogo.metacritic" type="number" min="0" max="100" placeholder="Nota Metacritic" />
        </div>
        <div class="form-group">
            <label for="imagem">Imagem do Jogo:</label>
            <input id="imagem" type="file" @change="onFileChange" accept="image/*" />
        </div>
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
    name: 'AllGamesComp',
    props: {
        games: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            showModal: false,
            jogo: {
                titulo: '',
                descricao: '',
                imagemURL: '',
                dataLancamento: '',
                preco: 0,
                categorias: [],
                desenvolvedores: [],
                plataformas: [],
                metacritic: 0
            },
            editMode: false,
            editId: null,
            imagemFile: null,
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
            this.form = {
                titulo: '',
                descricao: '',
                imagemURL: '',
                dataLancamento: '',
                preco: 0,
                categorias: '',
                desenvolvedores: '',
                plataformas: '',
                metacritic: 0
            };
        },
        openAddModal() {
            this.editMode = false;
            this.editId = null;
            this.imagemFile = null;
            this.jogo = {
                titulo: '',
                descricao: '',
                imagemURL: '',
                dataLancamento: '',
                preco: 0,
                categorias: [],
                desenvolvedores: [],
                plataformas: [],
                metacritic: 0
            };
            this.showModal = true;
        },
        async cadastrarjogo() {
            try {
                const formData = new FormData();
                formData.append('titulo', this.jogo.titulo);
                formData.append('descricao', this.jogo.descricao);
                formData.append('dataLancamento', this.jogo.dataLancamento);
                formData.append('preco', this.jogo.preco);
                formData.append('metacritic', this.jogo.metacritic);

                // Arrays como string separada por vírgula
                formData.append('categorias', typeof this.jogo.categorias === 'string'
                    ? this.jogo.categorias
                    : this.jogo.categorias.join(','));
                formData.append('desenvolvedores', typeof this.jogo.desenvolvedores === 'string'
                    ? this.jogo.desenvolvedores
                    : this.jogo.desenvolvedores.join(','));
                formData.append('plataformas', typeof this.jogo.plataformas === 'string'
                    ? this.jogo.plataformas
                    : this.jogo.plataformas.join(','));

                // Adicione a imagem se houver
                if (this.imagemFile) {
                    formData.append('imagem', this.imagemFile);
                }

                if (this.editMode && this.editId) {
                    await axiosInstance.put(`/jogos/${this.editId}`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                } else {
                    await axiosInstance.post('/jogos', formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                }

                // Limpa o form
                this.jogo = {
                    titulo: '',
                    descricao: '',
                    imagemURL: '',
                    dataLancamento: '',
                    preco: 0,
                    categorias: [],
                    desenvolvedores: [],
                    plataformas: [],
                    metacritic: 0
                };
                this.imagemFile = null;
                this.showModal = false;
                this.editMode = false;
                this.editId = null;
                this.$emit('jogo-cadastrado');
            } catch (error) {
                console.error('Erro ao salvar o jogo:', error);
            }
        },
        async excluirJogo(id) {
            try {
                await axiosInstance.delete(`/jogos/${id}`);
                this.$emit('jogo-cadastrado'); // Atualiza a lista após exclusão
            } catch (error) {
                console.error('Erro ao excluir jogo:', error);
            }
        },
        formatDate(dateStr) {
            if (!dateStr) return '';
            const d = new Date(dateStr);
            return d.toLocaleDateString('pt-BR');
        },
        openEditModal(game) {
            this.editMode = true;
            this.editId = game._id;
            this.jogo = {
                titulo: game.titulo,
                descricao: game.descricao,
                imagemURL: game.imagemURL,
                dataLancamento: game.dataLancamento ? game.dataLancamento.substr(0, 10) : '',
                preco: game.preco,
                categorias: Array.isArray(game.categorias) ? game.categorias.join(', ') : game.categorias || '',
                desenvolvedores: Array.isArray(game.desenvolvedores) ? game.desenvolvedores.join(', ') : game.desenvolvedores || '',
                plataformas: Array.isArray(game.plataformas) ? game.plataformas.join(', ') : game.plataformas || '',
                metacritic: game.metacritic
            };
            this.showModal = true;
        },
        onFileChange(event) {
            const file = event.target.files[0];
            this.imagemFile = file;
        },
        getImageUrl(path) {
            if (!path) return '';
            // Se já for uma URL completa, retorna direto
            if (path.startsWith('http')) return path;
            // Monta a URL correta do backend
            return `http://localhost:3000${path}`;
        },
    }
}
</script>

<style>
.games-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:30px;
    gap: 20px;
}

.new-game-container{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.new-game-container button {
    background-color: #a3a3a315;
    color: #fff;
    padding: 20px 30px;
    border: 1px solid #ffffffe7;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
}

.games-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.card-game{
    width: 90%;
    background-color: #24242467;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 18px;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 18px;
}

.game-img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0004;
}

.main-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.main-info h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
}

.info-row {
    display: flex;
    gap: 18px;
    font-size: 1rem;
    color: #f3f3f3;
    margin-top: 4px;
}

.desc-row {
    color: #f3f3f3;
    font-size: 1rem;
    margin-bottom: 4px;
}

.tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-bottom: 4px;
}

.tag-group {
    display: flex;
    align-items: center;
    gap: 6px;
}

.tag-group strong {
    color: #fff;
    font-size: 0.95rem;
}

.tag {
    background: #3f82ff33;
    color: #fff;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 0.92rem;
    margin-right: 2px;
}

.actions {
    display: flex;
    gap: 25px;
    margin-top: 6px;
}

.actions button{
    border: none;
    cursor: pointer;
    padding: 8px 22px;
    border-radius: 5px;
}

#exclude-game{
    background: linear-gradient(90deg, #ff614c 0%, #ff9c3f 100%);
}

#edit-game{
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
    padding: 24px 16px;
    border-radius: 12px;
    min-width: 520px; /* reduzido */
    max-width: 95vw;
    box-shadow: 0 2px 16px #00000055;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.modal-add-game.modal-content {
    background: #242424;
    padding: 24px 16px;
    border-radius: 12px;
    min-width: 520px;
    max-width: 95vw;
    box-shadow: 0 2px 16px #00000055;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.modal-add-game h2 {
    color: #fff;
    font-size: 22px;
    margin-bottom: 10px;
}
.modal-add-game .form-columns {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
.modal-add-game .form-group {
    flex: 1 1 45%;
    min-width: 180px;
    max-width: 48%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 10px;
}
.modal-add-game .form-group label {
    color: #fcfcfce5;
    font-size: 16px;
    font-weight: 400;
}
.modal-add-game .form-group input,
.modal-add-game .form-group select {
    background: #1818188f;
    color: #fff;
    border: 1px solid #5e5e5e67;
    border-radius: 5px;
    padding: 15px;
    font-size: 13px;
}
.modal-add-game .modal-actions {
    margin-top: 10px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}
.modal-add-game .modal-actions button {
    background-color: #a3a3a333;
    color: #fff;
    padding: 12px 28px;
    border: 1px solid #5e5e5e67;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    transition: background 0.2s;
}
.modal-add-game .modal-actions button[type="submit"] {
    background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
    border: none;
}
.modal-add-game .modal-actions button[type="button"] {
    background: #444;
    border: none;
}
</style>