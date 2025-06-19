Proyecto de Búsqueda de Animales
Este proyecto es una pequeña aplicación web que permite buscar animales y ver detalles de cada uno. Lo desarrollé como parte de una prueba técnica para demostrar mis habilidades en React, testing y despliegue.

Qué hice y por qué
Frontend con React + Vite: Elegí Vite por su velocidad y simplicidad para crear la app React.

Routing con React Router: Para manejar las rutas y los parámetros de búsqueda, usando hooks como useSearchParams.

Generación de datos fake: Como no había API real, implementé un generador de datos fake con Faker.js y un mock para simular resultados.

Componentes bien separados: Creé componentes reutilizables como AnimalCard, Spinner y una página principal de resultados.

Accesibilidad: Añadí atributos ARIA y manejé eventos de teclado para que la app sea más accesible.

Tests con Vitest y Testing Library: Escribí pruebas unitarias y de integración para asegurar el correcto funcionamiento, incluyendo mocks para los datos fake.

Despliegue con Vercel: Configuré el proyecto para hacer deploy automático en Vercel conectado a GitHub, con la configuración necesaria para Vite.

Cómo ejecutar el proyecto localmente
Clona el repositorio:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala dependencias:

bash
Copiar
Editar
npm install
Levanta el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
Ejecuta los tests:

bash
Copiar
Editar
npm run test
Cómo funciona la aplicación
Al cargar, puedes buscar un tipo de animal en el input.

Los resultados se filtran y muestran como tarjetas con imagen, título y tipo.

Al hacer clic o usar teclado en una tarjeta, aparece el detalle con descripción y opción para cerrar.

El scroll se mueve suavemente arriba cuando abres un detalle.

La aplicación maneja estados de carga, sin resultados o sin término de búsqueda con mensajes claros.

Todo es responsive y accesible.

Tecnologías usadas
React 18

Vite

React Router DOM

Faker.js

Vitest + Testing Library

Vercel (deploy)

CSS simple y modular