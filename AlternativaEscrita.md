**1. Breve descripción de tu plan de pruebas y selección de escenarios**

Se tiene organizado el framework de prueba utilizando Cypress para automatizar validaciones de la API Open WeatherMap.
Se organizó la estrategia de la automatización en una única suite de prueba que componen 2 tests.
Los mismos hacen un get de clima por nombre de ciudad, un get por coordenadas de ciudad y una reproducción de error esperado (404).
En los tres tests se valida código de respuesta HTTP, también se valida tiempo de respuesta y el esquema de respuesta.

Se realiza una sola suite para estas validaciones ya que en cuanto al código sería más fácil de mantener, para integración del repositorio con un pipeline de CI/CD y se reduce los tiempos de ejecución.

Se elegió Cypress porque funciona tanto para validar backend así como también frontend.

**2. Demostración de las pruebas automatizadas**

![Texto alternativo](./imagenes/Climaporciudad.png)


![Texto alternativo](./imagenes/Climaporcoordenadas.png)


![Texto alternativo](./imagenes/Ciudadivalida.png)

