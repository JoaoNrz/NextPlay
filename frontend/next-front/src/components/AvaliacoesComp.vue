<template>
    <div class="avalia-container">
        <div class="nova-avalia-container">
            <button @click="showModal = true">Adicionar Avaliação</button>
        </div>
        <div class="avalia-content">
            <div class="card-avalia">
                <div class="title-game-avalia">
                    <h1>Jogo:</h1>
                    <p>The Last of Us Part II</p>
                </div>
                <div class="coment-game-avalia">
                    <h1>Comentário:</h1>
                    <p id="avalia-text">
                    The Last of Us Part II é uma experiência incrível do início ao fim. A narrativa é envolvente e cheia de reviravoltas emocionantes, mantendo o jogador preso à história. Os gráficos são impressionantes, com cenários detalhados e personagens muito bem construídos. A trilha sonora complementa perfeitamente a atmosfera do jogo, tornando cada momento ainda mais impactante. Sem dúvida, é um dos melhores jogos já lançados para PlayStation.
                </p>
                </div>
                
                <div class="avalia">
                    <h1>Avaliação:</h1>
                    <span>5</span>
                </div>

                <div class="actions">
                    <button id="edit-avalia"><img src="../assets/images/delete.png" alt=""></button>
                    <button id="exlude-avalia"><img src="../assets/images/editing.png" alt=""></button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <h2>Adicionar Avaliação</h2>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="game">Jogo:</label>
                        <select id="game" v-model="form.game" required>
                            <option disabled value="">Selecione um jogo</option>
                            <option v-for="game in games" :key="game" :value="game">{{ game }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="comentario">Comentário:</label>
                        <textarea id="comentario" v-model="form.comentario" required rows="4" placeholder="Escreva sua avaliação..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="nota">Nota:</label>
                        <select id="nota" v-model="form.nota" required>
                            <option disabled value="">Selecione a nota</option>
                            <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                        </select>
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
    export default {
        name: 'AvaliacoesComp',
        data() {
        return {
            showModal: false,
            form: {
                game: '',
                comentario: '',
                nota: ''
            },
            games: [
                'The Last of Us Part II',
                'God of War',
                'Horizon Zero Dawn',
                'Spider-Man',
                'Uncharted 4'
            ]
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
            this.form = { game: '', comentario: '', nota: '' };
        },
        submitForm() {
            // Aqui você pode adicionar a lógica para salvar a avaliação
            this.closeModal();
        }
    }
    }
</script>

<style>
    .avalia-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:30px;
        gap: 20px;
    }

    .nova-avalia-container{
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }

    .nova-avalia-container button {
        background-color: #a3a3a315;
        color: #fff;
        padding: 20px 30px;
        border: 1px solid #ffffffe7;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
    }

    .avalia-content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        gap: 10px;

    }

    .card-avalia{
        width: 90%;
        background-color: #24242467;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }

    .title-game-avalia h1, .coment-game-avalia h1, .avalia h1{
        font-size: 21px;
        font-weight: bold;
        color: #fff;
        margin-bottom: unset;
        margin-bottom: 8px;
    }

    .title-game-avalia p{
        font-size: 25px;
        font-weight: 400;
        color: #f3f3f3;
        margin-bottom: unset;
    }

    .coment-game-avalia p{
        font-size: 15px;
        font-weight: 400;
        color: #e4e4e4;
        margin-bottom: unset;
    }

    .avalia span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: transparent;
        font-size: 22px;
        font-weight: 700;
        color: #f3f3f3;
        margin-bottom: unset;
        border: 1px solid #5e5e5e67;
        margin-top: 10px;
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

    #exlude-avalia{
        
        background: linear-gradient(90deg, #005547 0%, #3f82ff 100%);
    }

    #edit-avalia{
        background: linear-gradient(90deg, #ff614c 0%, #ff9c3f 100%);
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
.form-group select,
.form-group textarea {
    background: #1818188f;
    color: #fff;
    border: 1px solid #5e5e5e67;
    border-radius: 5px;
    padding: 15px;
    font-size: 14px;
    resize: none;
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