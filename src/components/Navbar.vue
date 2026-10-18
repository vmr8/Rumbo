<template>
  <header class="navbar">
    <RouterLink class="brand" to="/">Rumbo</RouterLink>

    <nav aria-label="Navegación principal">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/destinos">Destinos</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #174f46;
}

.brand {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  color: #d1eadb;
}

@media (max-width: 600px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  nav {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>