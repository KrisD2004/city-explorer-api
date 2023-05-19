# city-explorer-api

**Author**: Kristian Dotson
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

This application is a weather API that allows users to get the forecast of a certain locations. The weather data is stored in a JSON file, and users can query the API using latitude, longitude, or city name. This app uses Node js and express js frameworks.



## Getting Started

To run this application on your local machine, you will need to have Node.js and npm (Node Package Manager) installed. Then, follow these steps:

step 1: Clone the repository

step 2 : Install the dependencies by running npm install in the terminal

3: Run the server by running npm start in the terminal

The server will start running on port 3001, and you can access it by going to http://localhost:3001/weather.

## Architecture

The application includes a Forecast class that follows a specific format for creating forecast objects. These objects are created from the weather data and stored in an array. When the API server receives a GET request at the /weather endpoint, it extracts the latitude, longitude, and search query parameters from the request and searches the weather data JSON file for a matching location. If a match is found, the server sends back the forecast data for that location using the forecast objects previously created. If there is no matching location, an error message is sent back to the client.

## Change Log

09-06-2023 10:00am - Initial version of the application with the ability to search for weather forecast by latitude, longitude or city name.


## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->



Name of feature: adding weather info for the city 

Estimate of time needed to complete: 1 day

Start time: __9am___

Finish time: ___10pm__

Actual time needed to complete: __almost a day___



## Name of feature: Weather info API for all cities

Estimate of time needed to complete: 5 hours

Start time: 9:30am

Finish time: 2:45pm

Actual time needed to complete: 5

## Name of feature: Weather and Movie info API for all cities

Estimate of time needed to complete: 24 hours

Start time: 9:05am

Finish time: 4:45pm

Actual time needed to complete: 7 hours and 40 minutes

## Name of feature: Modularize the back-end codebase

Estimate of time needed to complete: 2 hours

Start time: 10:00am

Finish time: 10:15am

Actual time needed to complete: 15 mintues

