<template>
  <div class="container">
    <h1>Cadastrar Novo Jogo</h1>
    <GameForm mode="create" />
  </div>
</template>

<script>
import GameForm from '../components/GameForm.vue'

export default {
  name: 'AdminCreateGameView',
  components: {
    GameForm
  }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 5px;
  font-size: 38px;
  font-weight: 400;
}
</style>
