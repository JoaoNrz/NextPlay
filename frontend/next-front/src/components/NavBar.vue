<template>
    <aside class="discover-sidebar">
        <nav class="discover-nav">
            <div class="discover-menu">
                <a href="/">Home</a>
            </div>
            <div class="discover-menu">
                <a href="/avaliacoes">Avaliações</a>
            </div>
            <div class="discover-menu">
                <div class="nickname">
                    <span>{{ userName }}</span>
                    <!-- Ícone do usuário -->
                    <div class="user-icon">
                        {{ userInitial }}
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="/wishlist"><img src="../assets/images/heart.png" alt="">Wishlist</a>
                    </li>
                    <li>
                        <a href="/library"><img src="../assets/images/library.png" alt="">Biblioteca</a>
                        
                        
                    </li>
                </ul>
            </div>
            <div class="discover-menu" v-if="isAdmin">
                <div class="nickname">
                    <span>Admin</span>
                </div>
                <ul>
                    <li>
                        <a href="/all-users"><img src="../assets/images/group.png" alt="">Usuarios</a>
                    </li>
                    <li>
                        <a href="/all-games"><img src="../assets/images/game-controller.png" alt="">Jogos</a>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'NavBar',
    computed: {
        userName() {
            return localStorage.getItem('userName') || 'NickName';
        },
        userInitial() {
            const name = localStorage.getItem('userName') || '';
            return name ? name[0].toUpperCase() : 'J';
        },
        isAdmin() {
            // Se usar booleano:
            return localStorage.getItem('isAdmin') === 'true';
            // Se usar idAdmin:
            // return localStorage.getItem('idAdmin') === 'true' || localStorage.getItem('idAdmin') === '1';
        }
    }
}
</script>

<style scoped>
    .discover-sidebar {
        width: 15%;
        margin-right: 20px;
        margin-top: 40px;
        padding: 20px;
    }

    .discover-menu a, .discover-menu span{
        color:white;
        font-size:24px;
        font-weight: bold;
        text-decoration: none;
    }

    .discover-nav{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .user-icon {
        width: 35px;
        height: 35px;
        background: linear-gradient(90deg, #ff2289 0%, #f86b0d 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 17px;
    }

    .nickname {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .discover-menu ul li{
        color: white;
        font-size: 18px;
        font-weight: normal;
        list-style-type: none;
        margin-top: 10px;
    }

    .discover-menu ul li img{
        max-width: 16px;
        margin-right: 8px;
    }

    .discover-menu ul li a{
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: normal;
    }

    .discover-menu ul li a:hover{
        color: rgb(209, 209, 209);
    }
</style>