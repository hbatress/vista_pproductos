// filepath: /H:/PROYECTOS/vista trabajo/vistas/src/components/MyComponent.vue
<template>
  <div class="p-4">
    <div v-if="productos">
      <h2 class="text-2xl font-bold mb-4">Productos:</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="producto in productos" :key="producto.id_producto" class="border p-4 rounded shadow">
          <img :src="producto.imagen" :alt="producto.nombre" class="w-full h-48 object-cover mb-4" />
          <p class="text-lg font-semibold">{{ producto.nombre }}</p>
          <p class="text-gray-600">Marca: {{ producto.marca }}</p>
          <p class="text-green-500 font-bold">Q{{ producto.precio }}</p>
          <button class="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'MyComponent',
  data() {
    return {
      productos: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await api.get('/productos');
        this.productos = response.data;
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  }
}
</script>

