<template>
    <header class="header">
        <div class="container">
            <!-- Logo -->
            <div class="logo">NextPlay</div>

            <!-- Barra de pesquisa -->
            <div class="search-bar">
                <input type="text" placeholder="Pesquisar jogos..." />
            </div>

            <!-- Ícone do usuário -->
            <div class="user-icon">
                J
            </div>
        </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    userInitial: {
      type: String,
      default: 'J'
    }
  }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 60px;
    }

    .container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding:10px 20px;
    }

    .user-icon {
        width: 40px;
        height: 40px;
        background-color: #007bff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 18px;
    }
</style>