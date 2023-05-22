const axios = require('axios');

const movieCache = {};


// Fetch movies data from an API
exports.movies = (req, res) => {
    const MovieApi = "63c34b8a26182e7318d549b0a065285f"
    const title = req.query.title
    const UrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${MovieApi}&query=${title}`


    // Checking if the movie is already cached
    if (movieCache[title]) {
        res.send(movieCache[title]);
        return;
    }

    // If the movie is not cached, get it from the API
    axios.get(UrlMovie)
        .then(response => {

            let cityMovie = response.data.results;

            // Created a new Movie class using the fetched data
            const movies = cityMovie.map(movie => new Movie(
                movie.title,
                movie.overview,
                movie.average_votes,
                movie.total_votes,
                movie.image_url,
                movie.popularity,
                movie.release_on
            ));


            movieCache[title] = movies; // Cache the movies
            res.send(cityMovie);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Something has happend!')
        })
};

// Movie Class
class Movie {
    constructor(title, overview, average_votes, total_votes, image_url, popularity, released_on) {
        this.title = title;
        this.overview = overview;
        this.average_votes = average_votes;
        this.total_votes = total_votes;
        this.image_url = image_url;
        this.popularity = popularity;
        this.released_on = released_on;
    }
}
