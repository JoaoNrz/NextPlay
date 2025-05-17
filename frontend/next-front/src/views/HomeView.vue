<template>
  <HeaderComp :userInitial="'J'" />
  <div class="home">
    <div class="home-content">
      <NavBar :userInitial="'J'" class="navegation" />
      <div class="main-content">
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <p>This is where you can find the latest updates and news.</p>
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
        align-items: center;
        justify-content: center;
        padding: 20px 0px;
        width: 95%;
    }
    .main-content {
        width: 85%;
    }
        
</style>