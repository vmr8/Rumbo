HEAD
# Rumbo - Agencia de viajes

## Temática y descripción

Rumbo es una página web de una agencia de viajes. Permite descubrir destinos con fotografías, país y precio orientativo, además de consultar un formulario de contacto. La vista de destinos obtiene sus datos de Cloud Firestore.

## Requisitos

- Node.js 22.18 o superior y npm.
- Firebase CLI para publicar en Firebase Hosting.

## Instalación, ejecución y despliegue

Desde la carpeta raíz del proyecto, instala las dependencias e inicia el servidor local:

```sh
npm ci
npm run dev
```

Para generar y previsualizar la versión de producción:

```sh
npm run build
npm run preview
```

Para publicar en Firebase Hosting y desplegar las reglas de Firestore:

```sh
firebase login
firebase deploy --only hosting,firestore:rules
```

<<<<<<< HEAD
El proyecto Firebase predeterminado es `rumbo-39749` y está indicado en `.firebaserc`. `firebase.json` configura Hosting para servir `dist` y redirigir las rutas de Vue Router a `index.html`. La web publicada está en https://rumbo-39749.web.app.

## Componentes propios

- `Navbar.vue`: navegación principal entre las tres rutas mediante `RouterLink`.
- `DestinationList.vue`: muestra destinos en tarjetas con imagen, país y precio; recibe la lista mediante la prop `destinations`.
- `ContactSection.vue`: muestra el formulario de contacto. Actualmente valida los campos y presenta un mensaje local, pero no envía datos a un servidor.

## Comunicación entre padre e hijo con props

`DestinationsView.vue` es el componente padre: lee los documentos de la colección `destinations` de Firestore. `DestinationList.vue` es el componente hijo y recibe esos datos mediante la prop `destinations`:

```vue
<DestinationList :destinations="destinations" />
```

El hijo declara la prop así:

```js
defineProps({
  destinations: {
    type: Array,
    required: true,
  },
})
```

## Rutas

- `/`: `HomeView.vue`, portada de la agencia y presentación del servicio.
- `/destinos`: `DestinationsView.vue`, consulta Firestore y muestra la lista de destinos.
- `/contacto`: `ContactView.vue`, que muestra el formulario `ContactSection.vue`.

## Datos y reglas de Firestore

La colección utilizada es `destinations`. Cada documento debe incluir estos campos:

- `name`: nombre del destino (texto).
- `country`: país (texto).
- `price`: precio orientativo (número).
- `image`: URL directa de la imagen (texto).

Las reglas están en `firestore.rules`: permiten lecturas públicas de esta colección y deniegan escrituras. Los datos de una colección con lectura pública pueden consultarse sin iniciar sesión. La configuración web de Firebase de `src/firebase.js` es visible en el cliente; no incluyas claves privadas ni credenciales de cuentas de servicio.
=======
El proyecto predeterminado de Firebase se define en `.firebaserc`. Para apuntar a otro proyecto, usa `firebase use --add` y selecciona el proyecto correspondiente.
=======
# Rumbo
>>>>>>> cc18908fdd7f6141a47b373a4873f72c0abc3aa2
