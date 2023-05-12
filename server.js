'use strict'


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const data = require('./data/weather.json');
const port = process.env.PORT || 3001;


const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')


})

app.get('/weather', (req, res) => {
    // Status 200 is an Express response method that sends a JSON response to the client with a HTTP status code of 200 (OK). 



    // res.status(200).json(data)
    let searchQ = req.query.searchQ;
    let longitude = req.query.longitude;
    let latitude = req.query.latitude;
    if (searchQ == undefined || longitude == undefined || latitude == undefined) {

        res.status(400).send('Provide all params')
    }

    let findData = data.find(element => {
        if (searchQ != element.city_name || longitude === undefined || latitude === undefined) {
            return false;
        } else {

            return true;
        }

    })
    console.log(findData)
    let dataForecast = findData.data.map(element => {
        console.log(element) 
        let date = new Date(element.datetime)
        
        return new Forecast(date, element.weather.description )
    })
    console.log(dataForecast)
    res.send(dataForecast);



})

app.listen(port, () => console.log(`Server is running on port ${port}`))
class Forecast {
    constructor( date, description) {
        this.description = description,
        this.date = date;

    }
}

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  }
  
  app.use(errorHandler);