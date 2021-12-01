const functions = require("firebase-functions");
const { Client } = require("@googlemaps/google-maps-services-js");

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const googleClient = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});
