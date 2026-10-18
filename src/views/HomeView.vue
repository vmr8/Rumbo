<template>
	<main>
		<section class="intro">
			<p class="eyebrow">Tu próxima aventura comienza aquí</p>
			<h1>Viaja más lejos. Descubre algo nuevo.</h1>
			<RouterLink class="button" to="/destinos">Explorar destinos</RouterLink>
		</section>

		<section class="about-section">
			<h2>Viajamos contigo</h2>
			<p>Te ayudamos a planificar viajes memorables, con opciones para distintos estilos y presupuestos.</p>
		</section>
	</main>
</template>

<style scoped>
.intro {
	padding: 5rem 2rem;
	background-color: #e8f2ed;
	text-align: center;
}

.eyebrow {
	color: #28705e;
	font-weight: 700;
}

h1 {
	max-width: 700px;
	margin: 1rem auto 2rem;
	font-size: 3rem;
}

.button {
	display: inline-block;
	padding: 0.8rem 1.2rem;
	background-color: #174f46;
	color: white;
	text-decoration: none;
}

.about-section {
	padding: 3rem 2rem;
}
</style>
