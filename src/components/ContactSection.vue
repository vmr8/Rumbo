<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <div class="contact">
    <h2>Hablemos de tu próximo viaje</h2>
    <p>Cuéntanos qué tienes en mente y te ayudaremos a planificarlo.</p>

    <form @submit.prevent="submitForm">
      <label for="name">Nombre</label>
      <input id="name" v-model="name" name="name" required />

      <label for="email">Correo electrónico</label>
      <input id="email" v-model="email" name="email" type="email" required />

      <label for="message">¿A dónde te gustaría viajar?</label>
      <textarea id="message" v-model="message" name="message" rows="4" required />

      <button type="submit">Enviar consulta</button>
    </form>

    <p v-if="submitted" role="status">
      Formulario completado. Para recibir los mensajes, conecta el formulario a un servicio o backend.
    </p>
  </div>
</template>

<style scoped>
.contact {
  max-width: 600px;
  padding: 1.5rem;
  border-radius: 6px;
  background-color: #e1f1e6;
  color: #173f33;
}

form {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #aab8b2;
  background-color: #fff;
  color: #173f33;
  font: inherit;
}

button {
  justify-self: start;
  padding: 0.75rem 1rem;
  border: 0;
  background: #174f46;
  color: white;
  font: inherit;
  cursor: pointer;
}
</style>