const express = require('express');
const https = require('https');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => {
    const url = `http://battuta.medunes.net/api/country/all/?key=${process.env.countryAPI}`
    // const url = `http://battuta.medunes.net/api/country/all/?key=9127a7be7349c175a998dc63cfe154c3`
    console.log(url)
    //get country name and country code from country api
    axios.get(url)
        .then((response) => {
            const data = response.data;
            // const code = data.map(item => item.code)
            res.json(data)
            // const result = data.find(({ name }) => name === "Afghanistan")
            // res.json(result)
        })
        .catch((error) => {
            console.error(error);
            res.json({ "Error": true, "Message": error });
        })
});
module.exports = router;