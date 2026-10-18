<script setup>
import { onMounted, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import DestinationList from '../components/DestinationList.vue'

const destinations = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'destinations'))
    destinations.value = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
  } catch (err) {
    console.error('Error leyendo destinos de Firestore:', err)
    error.value = 'No se pudieron cargar los destinos.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="destinations-view">
    <h1>Destinos destacados</h1>

    <p v-if="loading" role="status">Cargando destinos...</p>
    <p v-else-if="error" role="alert">{{ error }}</p>
    <p v-else-if="destinations.length === 0">Todavía no hay destinos disponibles.</p>
    <DestinationList v-else :destinations="destinations" />
  </main>
</template>

<style scoped>
.destinations-view {
	padding: 3rem 2rem;
}

h1 {
	margin: 0 0 0.5rem;
}

.destinations-view > p {
	margin: 0 0 1.5rem;
}
</style>
