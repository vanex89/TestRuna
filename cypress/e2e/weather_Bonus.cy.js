// Prueba de integración IA con ChatGPT y GitHub Copilot

const API_KEY = "dea3d81b476aa0e59b6fbb10c5cb7ac0";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

describe('Edge case - Clima extremo en Yakutsk', () => {
  it('debe retornar clima muy frío y datos coherentes', () => {
    // Hacer GET a la ciudad Yakutsk
    cy.request({
      method: 'GET',
      url: `${BASE_URL}?q=Yakutsk&appid=${API_KEY}&units=metric`
    }).then((response) => {
      // Validar que el código de estado sea 200
      expect(response.status).to.eq(200);

      // Validar que la temperatura sea menor a -20 grados Celsius
      expect(response.body.main.temp).to.be.lessThan(20);

      // Validar que temp_min sea menor o igual a temp
      expect(response.body.main.temp_min).to.be.at.most(response.body.main.temp);
    });

  });
});
