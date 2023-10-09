const express = require('express');
const https = require('https');
const router = express.Router();
const axios = require('axios');

router.get('/:region', (req, res) => {
    const axios = require("axios");
    
    const options = {
        method: 'GET',
        url: `https://world-geo-data.p.rapidapi.com/countries/${req.params.region}/cities`,
        params: { min_population: '10000',limit :'30'},
        headers: {
          'X-RapidAPI-Key': process.env.countryInfoAPI,
          // 'X-RapidAPI-Key': 'ad9787137amsh518c3b3853a303dp12bf0cjsn8463d9688b4e',
          'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
        }
      };
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log(options.url)
    //get city information from city api
    axios.request(options).then(function (response) {
        const data= response.data.cities
      console.log(data)
        res.json(data)
    }).catch(function (error) {
        console.error(error);
    });
});

router.get('/city/:ID', (req, res) => {
  const axios = require("axios");
  const options = {
    method: 'GET',
    url: `https://world-geo-data.p.rapidapi.com/cities/${req.params.ID}`,
    headers: {
      'X-RapidAPI-Key': process.env.countryInfoAPI,
      // 'X-RapidAPI-Key': 'ad9787137amsh518c3b3853a303dp12bf0cjsn8463d9688b4e',
      'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
      const data= response.data

      res.json(data)
  }).catch(function (error) {
      
  });
});
module.exports = router;