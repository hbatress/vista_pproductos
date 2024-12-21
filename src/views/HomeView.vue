// filepath: /H:/PROYECTOS/vista trabajo/vistas/src/views/HomeView.vue
<template>
  <div class="home">
    <h1>Vista Principal</h1>
    <p>Bienvenido a la vista principal.</p>
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent.vue';

export default {
  name: 'HomeView',
  components: {
    MyComponent
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>