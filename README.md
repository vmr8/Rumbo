HEAD
# Rumbo, agencia de viajes

Aplicacion de Vue 3 y Vite con rutas de Vue Router y destinos leidos desde Cloud Firestore. Firebase Hosting publica el build de produccion desde `dist`.

## Requisitos

- Node.js 22.18 o superior
- npm
- Firebase CLI para desplegar

## Instalar y ejecutar

```sh
npm ci
npm run dev
```

## Datos de Firestore

La aplicacion se conecta al proyecto Firebase `rumbo-39749`. En Cloud Firestore, crea la coleccion `destinations`. Cada documento debe incluir:

- `name` (string)
- `country` (string)
- `price` (number)
- `image` (string con una URL de imagen)

La vista `/destinos` lee los documentos y los entrega al componente `DestinationList` mediante props. La configuracion web de Firebase en `src/firebase.js` es publica; no agregues claves privadas ni archivos de cuentas de servicio al cliente o al repositorio.

Las reglas estan en `firestore.rules`: permiten leer `destinations` y deniegan escrituras. Para publicarlas y desplegar Hosting:

```sh
firebase login
npm run build
firebase deploy --only hosting,firestore:rules
```

El proyecto predeterminado de Firebase se define en `.firebaserc`. Para apuntar a otro proyecto, usa `firebase use --add` y selecciona el proyecto correspondiente.
=======
# Rumbo
