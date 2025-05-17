<template>
  <HeaderComp :userInitial="'J'" />
  <div class="home">
    <div class="home-content">
      <NavBar :userInitial="'J'" class="navegation" />
      <div class="main-content">
        <h1>Novidades e tendências</h1>
        <p>Welcome to the home page!</p>
        <div class="extramsg">
          <p>Sua nova plataforma completa para gestão de jogos</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderComp from '../components/HeaderComp.vue'
  import NavBar from '../components/NavBar.vue'

    export default {
    name: 'HomeComp',
    components: {
      HeaderComp,
      NavBar
    }
  }
</script>


<style scoped> 
    .home{
      display: flex;
      justify-content: center;
    }

    .home-content {
        display: flex;
        align-items: start;
        justify-content: center;
        padding: 20px 0px;
        width: 95%;
    }
    .main-content {
        width: 85%;
    }

    .main-content h1 {
        font-size: 72px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }

    .extramsg{
      width: 100%;
      height: 80px;
      background: linear-gradient(90deg, #ff39a6 0%, #ff8c3f 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    .extramsg p{
      font-size: 26px;
      font-weight: bold;
      color: #fff;
      letter-spacing: 0.2px;
    }
        
</style>