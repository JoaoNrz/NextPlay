<template>
    <header class="header">
        <div class="container">
            <!-- Logo -->
            <div class="logo">NextPlay</div>

            <!-- Barra de pesquisa -->
            <div class="search-bar">
                <input type="text" placeholder="Pesquisar jogos..." />
            </div>

            <!-- Ícone do usuário e logout -->
            <div class="user-actions">
                <div class="user-icon" @click="goToUserPage" style="cursor:pointer;">
                    {{ userInitial }}
                </div>
                <span class="logout-link" @click="logout">Sair</span>
            </div>

            <div class="icons">
                <img src="../assets/images/bell.png" alt="">
                <img src="../assets/images/grocery-store.png" alt="">
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  computed: {
    userInitial() {
      const name = localStorage.getItem('userName') || '';
      return name ? name[0].toUpperCase() : '?';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      this.$router.push({ name: 'Login' });
    },
    goToUserPage() {
      const userId = localStorage.getItem('userId');
      this.$router.push({ name: 'UserPage', params: { id: userId } });
    }
  }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 110px;
    background-color: #151515;
    display: flex;
    justify-content: center;
}

.container{
    max-width: 95%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:10px 20px;
    height: 100%;
}

.user-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(90deg, #ff39a6 0%, #ff8c3f 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
}

.logout-link {
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    transition: text-decoration 0.2s;
}
.logout-link:hover {
    text-decoration: underline;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
}

.search-bar {
    width: 100%;
    max-width: 900px;
    align-items: center;
}

.search-bar input {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #e6e6e633;
    border-radius: 20px;
    padding: 15px;
    border:unset;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.icons{
    display: flex;
    gap: 25px;
}
</style>