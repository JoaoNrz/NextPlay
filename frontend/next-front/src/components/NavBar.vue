<template>
    <aside class="discover-sidebar">
        <nav class="discover-nav">
            <div class="discover-menu">
                <a href="#">Home</a>
            </div>
            <div class="discover-menu">
                <a href="#">Avaliações</a>
            </div>
            <div class="discover-menu">
                <div class="nickname">
                    <span>NickName</span>
                    <!-- Ícone do usuário -->
                    <div class="user-icon">
                        J
                    </div>
                </div>
                <ul>
                    <li>
                        <img src="../assets/images/heart.png" alt="">
                        Wishlist
                    </li>
                    <li>
                        <img src="../assets/images/library.png" alt="">
                        Biblioteca
                    </li>
                </ul>
            </div>
            <div class="discover-menu">
                <div class="nickname">
                    <span>Admin</span>
                </div>
                <ul>
                    <li>
                        <img src="../assets/images/group.png" alt="">
                        Usuarios
                    </li>
                    <li>
                        <img src="../assets/images/game-controller.png" alt="">
                        Jogos
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            userInitial: {
                type: String,
                default: 'J'
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
</style>