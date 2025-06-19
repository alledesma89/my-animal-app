Animal Search App
Este proyecto es una aplicación React para buscar animales, desarrollada con Vite y React Router. Incluye funcionalidades básicas de búsqueda, navegación y pruebas automatizadas con Vitest y Testing Library.

¿Qué incluye este proyecto?
Página principal (Home) con un formulario para buscar animales.

Página de resultados (Results) que muestra los animales filtrados según la búsqueda.

Componente reutilizable AnimalCard para mostrar la información de cada animal.

Rutas gestionadas con React Router.

Simulación de llamada a una API con datos falsos y retraso (mock).

Tests unitarios y de integración para asegurar que la funcionalidad principal funciona correctamente.

Configuración del entorno de pruebas con Vitest y jsdom para simular navegador.

Cómo ejecutar el proyecto
Para probar la aplicación en tu equipo, sigue estos pasos:

Clona este repositorio:

bash
Copiar
Editar
git clone <URL-del-repo>
Entra en la carpeta del proyecto:

bash
Copiar
Editar
cd my-animal-app
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia la aplicación en modo desarrollo:

bash
Copiar
Editar
npm run dev
Abre tu navegador y accede a:

arduino
Copiar
Editar
http://localhost:5173
Cómo ejecutar los tests
Para comprobar que todo funciona correctamente, ejecuta los tests con:

bash
Copiar
Editar
npm test
Los tests usan Vitest y Testing Library, cubriendo casos clave como:

Mostrar mensaje cuando no hay resultados.

Navegación y renderizado correcto de componentes según la ruta.

Presencia de elementos básicos en la página principal.

Estructura del proyecto
/src/pages – Contiene las páginas principales (Home, Results).

/src/components – Componentes reutilizables (AnimalCard).

/src/utils – Funciones auxiliares, simulación de API (delay.js).

/src/data – Datos falsos para pruebas y simulación.

Notas finales
Si tienes cualquier duda o necesitas ayuda para ejecutar el proyecto, no dudes en contactarme.
Gracias por la oportunidad de trabajar en este proyecto, espero que el resultado sea de tu agrado.