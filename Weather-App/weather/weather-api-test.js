import { WeatherAPI } from "./weather-api.js";

async function testInvoke() {
  const weatherAPI = new WeatherAPI("India");
  weatherAPI.buildURL();

  const responseInJSON = await weatherAPI.invoke();
  console.log(responseInJSON);
}

testInvoke();
