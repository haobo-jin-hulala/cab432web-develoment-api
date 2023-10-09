const express = require('express');
const https = require('https');
const router = express.Router();
const axios = require('axios');
router.get('/:query', (req, res) => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: req.params.query},
        headers: {
          'X-RapidAPI-Key': process.env.countryInfoAPI,
          // 'X-RapidAPI-Key': 'ad9787137amsh518c3b3853a303dp12bf0cjsn8463d9688b4e' ,
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

    axios.request(options).then(function (response) {
        const data= response.data
        console.log(response.data);
        
        res.json(data)
        
    }).catch(function (error) {
        console.error(error);
    });
});
module.exports = router;