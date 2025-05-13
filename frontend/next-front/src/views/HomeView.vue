<template>
  <div class="home">
    <HeaderComp :userInitial="'J'" />
    <h1>Tela Inicial</h1>
  </div>
</template>

<script>
  import HeaderComp from '../components/HeaderComp.vue'
    export default {
    name: 'HomeComp',
    components: {
      HeaderComp
    }
  }
</script>
