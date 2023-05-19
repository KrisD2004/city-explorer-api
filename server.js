'use strict'


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const Forecast = require('./weather')
const Movie = require('./movie')


// Load weather data from a JSON file
const data = require('./data/weather.json');

// Set the port number to use
const port = process.env.PORT || 3001;


const app = express();
app.use(cors());

// Set up a route for the root path
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Hello World!')


})

// Route for weather endpoint
app.get('/weather', Forecast.weather)

// (req, res) => {
//     const { city } = req.query;
//     const API = "81ee4af530ca4e15877158c4ecc15efe"
//     const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API}`
//     axios.get(URL)
//         .then(response => {
//             // Map the weather data to an array of Forecast objects
//             let dataForecast = response.data.data.map(element => {
//                 console.log(response.data)
//                 let date = new Date(element.datetime)

//                 return new Forecast(date, element.weather.description, response.data.lat, response.data.lon, response.data.city_name)
//             })
//             console.log(dataForecast)


//             // Send the array of Forecast objects to the client
//             res.send(dataForecast);
//         })
//         .catch(err => {
//             console.error(err)
//             console.log(err.response.statusText)
//             res.status(500).send('Something went wrong!' );
//         });
// });

// Route for movies endpoint
app.get('/movies', Movie.movies)

// (req, res) => {
//     const MovieApi = "63c34b8a26182e7318d549b0a065285f"
//     const title = req.query.title
//     const UrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${MovieApi}&query=${title}`
//     axios.get(UrlMovie)
//     .then(response => {
        
//         let cityMovie = response.data.results 
//         res.send(cityMovie);
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).send('Something has happend!')
//     })
// })

// .then(response => {


//     // Map the weather data to an array of Forecast objects
//     let dataForecast = response.data.data.map(element => {
//         console.log(element)
//         let date = new Date(element.datetime)

//         return new Forecast(date, element.weather.description)
//     })
//     console.log(dataForecast)

//     // Send the array of Forecast objects to the client
//     res.send(dataForecast);

// }
// .catch ((err) => {

//     // function errorHandler(err, req, res, next) {
//     //     console.error(err.stack);
//     //     res.status(500).send('Something went wrong!');
//     // } 

//     // app.use(errorHandler);
//     res.status(500).send({err:'Something went wrong!'});
// }

// ))


// Get query parameters from the request
// let searchQ = req.query.searchQ;
// let longitude = req.query.longitude;
// let latitude = req.query.latitude;
//old if statement
// if (searchQ == undefined || longitude == undefined || latitude == undefined) {
//     //sending an error response to the user
//     res.status(400).send('Provide all params')
// }
// new if statement 
// if (!searchQ || !longitude || !latitude) {
//     // Sending an error response to the user
//     res.status(400).send('Provide all params');
//     return;
// }



// Find the weather data for the specified city
// let findData = data.find(element => {
//     //old if statement
//     // if (searchQ != element.city_name || longitude === undefined || latitude === undefined) {
//     //     return false;
//     // } else {

//     //     return true;
//     // }

//     new if statement
//     if (!findData) {
//         res.status(404).send('Weather data not found for the specified location');
//         return;
//     }
//     return (
//         searchQ.toLowerCase() === element.city_name.toLowerCase() &&
//         longitude === element.longitude &&
//         latitude === element.latitude
//     );

// })





// })

// Start the server and listen for incoming requests
app.listen(port, () => console.log(`Server is running on port ${port}`))

// class for the searched city weather forcast and movies playing in the city
// class Forecast {
//     constructor(date, description, lat, lon, city_name) {
//         this.date = date;
//         this.description = description;
//         this.lat = lat;
//         this.lon = lon;
//         this.city_name = city_name;

//     }
// }
 
// class Movie {
//     constructor(title, overview, average_votes, total_votes, image_url, popularity, released_on) {
//         this.title = title;
//         this.overview = overview;
//         this.average_votes = average_votes;
//         this.total_votes = total_votes;
//         this.image_url = image_url;
//         this.popularity = popularity;
//         this.released_on = released_on;
//     }
// }

