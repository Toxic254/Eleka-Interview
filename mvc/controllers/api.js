// GET WEATHER OF SPECIFIC CITY
const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config()
// Gets the HomePage of the API.
exports.getHomePage = (req, res) => {
  res.render('index', {
    city: null,
    des: null,
    icon: null,
    temp: null
  });
};
// Created the POST Controller for handling the City Detais, our API was supposed to use coordinates but 
// for usability, users will be able to insert their city of choice and magic happens.
exports.postWeatherDetails = async (req, res) => {
    const city = req.body.city;
    const url_api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.APIkey}`;
  
    try {
        await fetch(url_api)
        // We pick the JSON Response
          .then(res => res.json())
        // From the data we pick the data to be represented in the front-end.
          .then(data => {
            console.log(data)
            if (data.message === 'city not found') {
              res.render('index', {
                city: data.message,
                cityId: null,
                lon: null,
                lat: null
              })
            } else {
              const cityId = data.city.id;
              const city = data.city.name;
              const lon = data.city.coord.lon;
              const lat = data.city.coord.lat;
              // TO DO - Bring all temperatures and pressures first,
              // Before compiling them to form graph data
              const temp = data.main.temp;
    
              res.status(201).render('index', {
                cityId, city, des, icon, temp
              });
            }
          });
    
      } catch (err) {
        res.status(404).render('index', {
          city: 'something wrong',
          des: null,
          icon: null,
          temp: null
        })
      }
  
  }