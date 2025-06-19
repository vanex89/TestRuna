**Instrucciones de Configuración**

Se realizaron las siguientes configuraciones para la ejecución de pruebas automatizadas para el endpoint de la API de Current Weather Data:

1. Instalar Node.js: 
- Ingresar a https://nodejs.org
- Presionar el botón “Descargar Node.js (LTS).
- Descargar e instalar con las opciones que arroja predeterminadamente.

2. Instalar Visual Studio Code:
- Ingresar a https://code.visualstudio.com/ 
- Presionar el botón “Download for Windows”.
- Durante la instalación hay una opción de “Agregar al PATH”, esta se debe activar.

3. Crear carpeta para el proyecto:
- Desde un lugar seguro de su equipo, cree una carpeta.

4. Inicializar proyecto en Visual Studio Code:
- Abrir Visual Studio Code.
- Abrir la carpeta previamente creada (Desde el menú principal File -> Open Folder ->Seleccionar carpeta).
- Seleccioné la carpeta recién agregada y seleccione New File
- Ingrese nombre y al final agregue “.cy.js”.
- Desde el menú principal seleccionar View ->Terminal
- Ejecutar en la terminal npm init -y
5. Instalar Cypress:
- Desde la misma terminal ejecute npm install cypress --save-dev
- Abra Cypress ejecutando el comando npx cypress open
- Desde la ventana de Cypress seleccione E2E Testing
- Luego en la pantalla de Configuration Files” presione botón “Continue”.
- Seleccione navegador y presione botón “Start E2E Testing in Chrome”.

Desde Visual Studio Code se debe observar la siguiente estructura:

**Nombre de Carpeta creada**
       cypress
           downloads
           e2e
              Test.cy.js
           fixtures
           support

       node_modules
       cypress.config.j
       package-lock.json
       package.json
       

En el archivo **Test.cy.js** se agregarían los scripts de la prueba.
