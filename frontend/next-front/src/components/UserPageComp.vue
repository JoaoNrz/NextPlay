<template>
    <div class="userpage-container">
        <div class="inicial-infos-user">
            <h1>NickName</h1>
            <div class="user-icon">J</div>
        </div>
        <div class="links-user">
            <ul>
                <li><a href="#">Biblioteca</a></li>
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
            <p>Name</p>
            <h2>Email:</h2>
            <p>Email</p>
            <h2>Senha:</h2>
            <p>Senha</p>
            <h2>Data de cadastro:</h2>
            <p>Data Cadastro</p>
            <div class="actions-user">
                <button>
                    <img src="../assets/images/delete.png" alt="">
                </button>
                <button>
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
</template>

<script>
export default {
    name: 'UserPageComp',
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
</style>
