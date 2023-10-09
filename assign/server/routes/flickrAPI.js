const express = require('express');
const https = require('https');
const router = express.Router();
const axios = require('axios');
router.get('/:query', (req, res) => {
    number=50;
    const options = createFlickrOptions(req.params.query, number);
    const url = `https://${options.hostname}${options.path}`;
    axios.get(url)
        .then((response) => {
            // res.writeHead(response.status, { 'content-type': 'text/html' });
            res.json(response.data.photos.photo)
                // console.log(response.data)
                // return response.data;

        })

    .catch((error) => {
        console.error(error);
    })
});

const flickr = {
    method: 'flickr.photos.search',
    api_key: process.env.filckrAPI,
    // api_key: '12322e8666061aa55b3f11cdbf100d9b',
    format: "json",
    media: "photos",
    nojsoncallback: 1
};

function createFlickrOptions(query, number) {
    const options = {
        hostname: 'api.flickr.com',
        port: 443,
        path: '/services/rest/?',
        method: 'GET'
    }
    const str = 'method=' + flickr.method +
        '&api_key=' + flickr.api_key +
        '&tags=' + query +
        '&per_page=' + number +
        '&format=' + flickr.format +
        '&media=' + flickr.media +
        '&nojsoncallback=' + flickr.nojsoncallback;
    options.path += str;
    return options;
}



// const flickReq = https.request(options, (flickRes) => {
//     console.log(options)
//     let body = [];
//     flickRes.on('data', function(chunk) {
//         body.push(chunk);
//     });
//     flickRes.on('end', function() {
//         res.writeHead(flickRes.statusCode, { 'content-type': 'text/html' });
//         const bodyString = body.join('');
//         const rsp = JSON.parse(bodyString);
//         console.log(rsp)
//         res.write(rsp);
//         res.end();
//     });
// });
// flickReq.on('error', (e) => {
//     console.error(e);
// });
// flickReq.end();
module.exports = router;