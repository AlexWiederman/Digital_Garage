export const searchCarInformation = (query) => {
    return fetch(`https://api.api-ninjas.com/v1/cars?api_key=${process.env.API_KEY}&model=${query}`);
  };