**QA Automation - OpenWeatherMap API with Cypress**

Este repositorio contiene una suite de pruebas automatizadas para validar el funcionamiento del endpoint Current Weather Data de la API pública de OpenWeatherMap.
Las pruebas están escritas en JavaScript utilizando Cypress 14.4.1 como framework de automatización.

**Estructura del proyecto**

 cypress

│   ├──  downloads

│   ├──  e2e

│   │     ├── weather_api.cy.js

│   │     └── weathers-Bonus.cy.js

│   ├──  fixtures

│   └──  support
│
├──  cypress.config.js

├──  package.json

└──  README.md

**¿Qué pruebas contiene este repositorio?**
Las pruebas están orientadas a validar el endpoint GET /weather con distintos escenarios:

1. Obtener el clima por nombre de ciudad
- Verifica que la ciudad retornada sea correcta.
- Valida la estructura del objeto main.temp y weather.description.
- Comprueba que la temperatura esté dentro de un rango razonable.
- Revisa que el código HTTP sea 200 OK y que la respuesta sea rápida.

2. Obtener el clima por coordenadas
- Valida latitud y longitud aproximadas.
- Verifica estructura y datos de respuesta.
- Confirma código de estado 200 OK y tiempos de respuesta bajos.

3. Manejo de ciudad inválida
- Envía una ciudad inexistente y espera un código 404 Not Found.
- Asegura que no se retornen datos de clima por error.
- Valida mensaje de error y duración de la respuesta.

**Tecnologías utilizadas**

Cypress 14.4.1
JavaScript ES6+
Node.js (versión 18+ recomendada)

**¿Cómo ejecutar el proyecto?**

1. Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

2. Instalar dependencias
npm install

3. Ejecutar pruebas
npx cypress open
Luego seleccioná un navegador y ejecutá el archivo weather_api.cy.js.

**Contacto**
Este repositorio fue creado por *Vanessa Velásquez* como parte de una evaluación técnica para el puesto de QA Automation Engineer.


