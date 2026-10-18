<script setup>
defineProps({
  destinations: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="destination-list">
    <article
      v-for="destination in destinations"
      :key="destination.id"
      class="destination"
    >
      <img
        class="destination-image"
        :src="destination.image"
        :alt="`Paisaje de ${destination.name}, ${destination.country}`"
        loading="lazy"
      />
      <div class="destination-content">
        <h3>{{ destination.name }}</h3>
        <p>{{ destination.country }}</p>
        <p>Desde ${{ destination.price }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>
.destination-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: #dcefe2;
  color: #173f33;
}

.destination {
  overflow: hidden;
  border: 1px solid #c5ddce;
  border-radius: 6px;
  background-color: #f1f8f3;
  color: #173f33;
}

.destination-image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.destination-content {
  padding: 1.25rem;
}

.destination h3 {
  margin: 0 0 0.5rem;
}

.destination p {
  margin: 0.35rem 0;
}
</style>