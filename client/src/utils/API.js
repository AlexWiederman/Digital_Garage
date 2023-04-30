import axios from 'axios';

export const searchCarInformation = (query) => {
  return axios.get(
    {
      url: `https://api.api-ninjas.com/v1/cars?model=${query}`,
      headers: {
        "X-Api-Key": `${process.env.API_KEY}`,
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode !== 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else console.log(body);
    }
  );
};
// fetch(`https://api.api-ninjas.com/v1/cars?api_key=${process.env.API_KEY}&model=${query}`);
