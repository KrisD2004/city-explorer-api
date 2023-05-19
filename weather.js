const axios = require('axios');


exports.weather = (req, res) => {
    const { city } = req.query;
    const API = "81ee4af530ca4e15877158c4ecc15efe"
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API}`
    axios.get(URL)
        .then(response => {
            // Map the weather data to an array of Forecast objects
            let dataForecast = response.data.data.map(element => {
                console.log(response.data)
                let date = new Date(element.datetime)

                return new Forecast(date, element.weather.description, response.data.lat, response.data.lon, response.data.city_name)
            })
            console.log(dataForecast)


            // Send the array of Forecast objects to the client
            res.send(dataForecast);
        })
        .catch(err => {
            console.error(err)
            console.log(err.response.statusText)
            res.status(500).send('Something went wrong!' );
        });
};

class Forecast {
    constructor(date, description, lat, lon, city_name) {
        this.date = date;
        this.description = description;
        this.lat = lat;
        this.lon = lon;
        this.city_name = city_name;

    }
}