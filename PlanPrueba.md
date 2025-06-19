**Plan de Prueba**

Prueba automatizada para la API de Current Weather Data

**Escenarios de Prueba**

**Happy Paths:**
1. Obtener clima por nombre de ciudad.
2. Obtener clima por coordenadas geográficas.
3. Entradas inválida.

**Edge Cases:**
1. Códigos de estado HTTPP.
2. Validación del esquema de la respuesta.
3. Corrección lógica de los datos.
4. Duración de la respuesta.

**Herramientas y frameworks**
- Cypress
- Node.js + npm
- Git + Github
- Visual Studio Code
- OpenWeatherMap API

**Tipos de validaciones:**

1. Validaciones de Código de Estado HTTP:
    *expect(response.status).to.eq(200);*
    *expect(response.status).to.eq(404);*
Estas aseguran que la API responde con el código esperado según el tipo de solicitud (éxito o error).

2. Validaciones de Esquema de Respuesta:
Se verifica que ciertos campos y estructuras existan en el cuerpo de la respuesta:
    *expect(response.body).to.have.property("main");*
    *expect(response.body.main).to.have.property("temp");*
    *expect(response.body).to.have.property("weather");*
    *expect(response.body.weather[0]).to.have.property("description");*
Estas validaciones aseguran que la estructura del JSON sea la correcta según lo esperado por el consumidor de la API.

3. Validaciones de Tipo de Datos
Se comprueba que los valores tengan el tipo adecuado:
    *expect(response.body.main.temp).to.be.a("number");*
    *expect(response.body.weather[0].description).to.be.a("string");*
    *expect(response.body.message).to.be.a("string");*
Estas aseguran consistencia en los datos retornados por la API.

4. Validaciones Lógicas de Contenido
Se validan valores dentro de un rango lógico o esperado:
    *expect(response.body.main.temp).to.be.within(-50, 60);*
Verifica que la temperatura esté en un rango realista.
    *expect(response.body.coord.lat).to.be.closeTo(-34.61, 0.5);*
    *expect(response.body.coord.lon).to.be.closeTo(-58.38, 0.5);*
Validan que las coordenadas estén cercanas a las esperadas para Buenos Aires.

5. Validaciones de Tiempo de Respuesta
    *expect(response.duration).to.be.lessThan(5000);*
Estas comprueban que la respuesta sea rápida (menos de 5 segundos), importante para garantizar buen rendimiento.

6. Validaciones de Manejo de Errores
En el caso de una ciudad inexistente:
    *failOnStatusCode: false*
Permite continuar con el test aunque haya un error HTTP.
Se valida que no existan propiedades que solo deberían estar en respuestas exitosas:
    *expect(response.body).to.not.have.property("main");*
    *expect(response.body).to.not.have.property("name");*


**Posible integraciones con CI/CD**

Se podría integrar fácilmente en una pipeline automatizada para garantizar la calidad continua. Por ejemplo:

**Herramientas:**

**Repositorio Github:** para almacenar los scripts y documentación.
**GitHub Actions/Jenkins:** son las herramientas de CI para correr las pruebas automáticamente.
**Desencadenante (trigger):** cada vez que se hace push en la rama principal o PR.

**Pasos de pipeline:
1. Instalar dependencias (npm install).
2. Ejecutar los tests Cypress (npx cypress run).
3. Reportar resultados (por consola o generar HTML con plugins).

**Estructura del proyecto:**

TESTRUNA/

├── do

├── cypress/

│   └── e2e/

│       └── weather_api.cy.js   # Tests automatizados

├── package.json                # Configuración de proyecto y dependencias

├── README.md                   # Documentación y setup

