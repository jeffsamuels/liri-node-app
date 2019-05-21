require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var argOne = process.argv[2];
var argTwo = process.argv[3];


if (argOne === 'concert-this') {

}

else if (argOne === 'spotify-this-song') {

    var spotify = new Spotify(keys.spotify);

    spotify
        .search({ type: 'track', query: argTwo })
        .then(function (response) {

            /// Couldn't find the path to console log artist
            console.log(argTwo);
            console.log(JSON.stringify(response.tracks.items[1].album.name, "utf8", 1));
            console.log(JSON.stringify(response.tracks.items[1].album.href, "utf8", 1));

        })
        .catch(function (err) {
            console.log(err);
        });
}

else if (argOne === 'movie-this') {

    var queryUrl = "http://www.omdbapi.com/?t=" + argTwo + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data);
            console.log("Release Year: " + response.data.Year);
        })
        .catch(function (error) {
            if (error.response) {

                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

else if (argOne === 'do-what-it-says') {

}











