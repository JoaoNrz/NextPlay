<template>
    <form @submit.prevent="handleSubmit" class="form-container">
        <div class="form-grid">
            <div class="form-group">
                <label for="titulo">Título:</label>
                <input id="titulo" v-model="form.titulo" type="text" required class="form-input" />
            </div>

            <div class="form-group">
                <label for="imagemURL">URL da Imagem:</label>
                <input id="imagemURL" v-model="form.imagemURL" type="text" class="form-input" />
            </div>

            <div class="form-group full-width">
                <label for="descricao">Descrição:</label>
                <textarea id="descricao" v-model="form.descricao" class="form-textarea"></textarea>
            </div>

            <div class="form-group">
                <label for="dataLancamento">Data de Lançamento:</label>
                <input id="dataLancamento" v-model="form.dataLancamento" type="date" class="form-input" />
            </div>

            <div class="form-group">
                <label for="preco">Preço (R$):</label>
                <input id="preco" v-model.number="form.preco" type="number" required class="form-input" />
            </div>

            <div class="form-group">
                <label for="metacritic">Metacritic:</label>
                <input id="metacritic" v-model.number="form.metacritic" type="number" min="0" max="100" class="form-input" />
            </div>

            <div class="form-group">
                <label for="categorias">Categorias (separadas por vírgula):</label>
                <input id="categorias" v-model="categoriasStr" type="text" class="form-input" />
            </div>

            <div class="form-group">
                <label for="desenvolvedores">Desenvolvedores (separados por vírgula):</label>
                <input id="desenvolvedores" v-model="desenvolvedoresStr" type="text" class="form-input" />
            </div>

            <div class="form-group">
                <label for="plataformas">Plataformas (separadas por vírgula):</label>
                <input id="plataformas" v-model="plataformasStr" type="text" class="form-input" />
            </div>

            <button type="submit" class="form-button">
                {{ mode === 'create' ? 'Criar Jogo' : 'Atualizar Jogo' }}
            </button>
        </div>
    </form>
</template>


<script>
export default {
    name: "GameForm",
    props: {
        mode: {
            type: String,
            required: true,
            validator: (v) => ['create', 'edit'].includes(v)
        },
        jogo: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            form: {
                titulo: '',
                descricao: '',
                imagemURL: '',
                dataLancamento: '',
                preco: 0,
                categorias: [],
                desenvolvedores: [],
                plataformas: [],
                metacritic: 0
            }
        }
    },
    computed: {
        categoriasStr: {
            get() {
                return this.form.categorias.join(', ')
            },
            set(value) {
                this.form.categorias = value.split(',').map(s => s.trim()).filter(Boolean)
            }
        },
        desenvolvedoresStr: {
            get() {
                return this.form.desenvolvedores.join(', ')
            },
            set(value) {
                this.form.desenvolvedores = value.split(',').map(s => s.trim()).filter(Boolean)
            }
        },
        plataformasStr: {
            get() {
                return this.form.plataformas.join(', ')
            },
            set(value) {
                this.form.plataformas = value.split(',').map(s => s.trim()).filter(Boolean)
            }
        }
    },
    mounted() {
        if (this.mode === 'edit' && this.jogo) {
            this.form = {
                ...this.jogo,
                dataLancamento: this.jogo.dataLancamento
                    ? new Date(this.jogo.dataLancamento).toISOString().substr(0, 10)
                    : ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const urlBase = 'http://localhost:3000/api/jogos'
                const options = {
                    method: this.mode === 'create' ? 'POST' : 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                }

                const url = this.mode === 'edit'
                    ? `${urlBase}/${this.jogo._id}`
                    : urlBase

                const res = await fetch(url, options)
                if (!res.ok) throw new Error('Erro ao salvar jogo')

                alert(`Jogo ${this.mode === 'create' ? 'criado' : 'atualizado'} com sucesso!`)
                this.$router.push({ name: 'AdminJogos' })

            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    background-color: rgba(46, 46, 46, 0.85);
    width: 90%;
    max-width: 1200px;
    border-radius: 10px;
    padding: 40px 60px;
    box-sizing: border-box;
    margin: 30px auto;
    border: 1px solid #41414141;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    width: 100%;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 8px;
    font-weight: 500;
    color: #e0e0e0ce;
    font-size: 17px;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 12px 14px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-family: inherit;
    box-sizing: border-box;
    background: #414141;
    color: #fff;
    transition: box-shadow 0.2s, border 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px #31c5ff;
}

.form-textarea {
    resize: vertical;
    min-height: 80px;
    max-height: 200px;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    width: 100%;
}

.form-button {
    background: linear-gradient(90deg, #31c5ff 0%, #4d8bff 100%);
    border: none;
    color: #fff;
    padding: 14px 28px;
    font-size: 17px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(49, 197, 255, 0.08);
}

.form-button:hover {
    background: linear-gradient(90deg, #4d8bff 0%, #31c5ff 100%);
    transform: translateY(-2px) scale(1.03);
}

/* Responsividade */
@media (max-width: 700px) {
    .form-container {
        padding: 20px 16px;
        width: 98%;
    }
    .form-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .form-actions {
        justify-content: center;
    }
    .form-button {
        width: 100%;
    }
}

</style>
