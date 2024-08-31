//Create a weather service that fetches weather data for a city and display it.
//You will implement an abstract weather service class, a mock weather service that inherits from it,
//and a weather app class that uses the mock service to display weather data.

class AbstractWeatherService {
  constructor() {
    if (this.constructor === AbstractWeatherService) {
      throw new Error(
        "Cannot create an instance of AbstractWeatherService directly."
      );
    }
    if (this.getWeatherByCity == undefined) {
      throw new Error("Subclasses must implement the getWeatherByCity method.");
    }
  }
}
class MockWeatherService extends AbstractWeatherService {
  constructor() {
    super();
    this.weatherData = {
      Tirana: { temp: 20, desc: "rainy" },
      Durres: { temp: 22, desc: "cloudy" },
      Berat: { temp: 23, desc: "rainy" },
      Lushnje: { temp: 19, desc: "rainy" },
    };
  }
  getWeatherByCity(city) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = this.weatherData[city];
        if (data) {
          resolve({ body: data });
        } else {
          reject(new Error(`Weather data not available for ${city}.`));
        }
      }, 1000);
    });
  }
}
class WeatherApp {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }
  displayWeather(city) {
    this.weatherService.getWeatherByCity(city).then(
      (response) => alert(`Weather for ${city} is ${response.body.desc}`),
      (error) => alert(error)
    );
  }
}
const mockWeatherService = new MockWeatherService();
const weatherApp = new WeatherApp(mockWeatherService);
weatherApp.displayWeather("Tirana");