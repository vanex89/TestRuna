const API_KEY = "dea3d81b476aa0e59b6fbb10c5cb7ac0";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

describe('Pruebas API de OpenWeatherMap', () => {

  //Obtener clima por nombre de ciudad - Código de estado HTTP - Esquema - Logica 
  it('Clima por ciudad', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}?q=Buenos Aires&appid=${API_KEY}&units=metric`
    }).then((response) => {
      expect(response.body.name).to.eq("Buenos Aires");

      // Esquema
      expect(response.body).to.have.property("main");
      expect(response.body.main).to.have.property("temp");
      expect(response.body.main.temp).to.be.a("number");

      expect(response.body).to.have.property("weather");
      expect(response.body.weather[0]).to.have.property("description");
      expect(response.body.weather[0].description).to.be.a("string");

      // Lógica de temperatura razonable
      expect(response.body.main.temp).to.be.within(-50, 60);

      // Código de estado HTTP
      expect(response.status).to.eq(200);

      // Duración de la respuesta
      expect(response.duration).to.be.lessThan(5000);
    });
  });

  // Obtener clima por coordenadas - Código HTTP - Esquema - Logica 
  it('Clima por coordenadas', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}?lat=-34.61&lon=-58.38&appid=${API_KEY}&units=metric`
    }).then((response) => {
      // Coordenadas aproximadas
      expect(response.body.coord.lat).to.be.closeTo(-34.61, 0.5);
      expect(response.body.coord.lon).to.be.closeTo(-58.38, 0.5);

      // Esquema
      expect(response.body).to.have.property("main");
      expect(response.body.main).to.have.property("temp");
      expect(response.body.main.temp).to.be.a("number");

      expect(response.body).to.have.property("weather");
      expect(response.body.weather[0]).to.have.property("description");
      expect(response.body.weather[0].description).to.be.a("string");

      // Lógica de temperatura
      expect(response.body.main.temp).to.be.within(-50, 60);
      // Código de estado HTTP
      expect(response.status).to.eq(200);
      // Duración de la respuesta
      expect(response.duration).to.be.lessThan(5000);
    });
  });

  // Entrada inválida - Código HTTP
  it('Ciudad inválida: status 404', () => {
    cy.request({
      method: 'GET',
      url: `${BASE_URL}?q=ciudadInexistente123&appid=${API_KEY}`,
      failOnStatusCode: false
    }).then((response) => {
      // Mensaje de error presente
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.be.a("string");

      // Validación lógica: no deben existir datos de clima
      expect(response.body).to.not.have.property("main");
      expect(response.body).to.not.have.property("name");
      // Código de estado HTTP
      expect(response.status).to.eq(404);
      // Duración de la respuesta
      expect(response.duration).to.be.lessThan(5000);
    });
  });


});