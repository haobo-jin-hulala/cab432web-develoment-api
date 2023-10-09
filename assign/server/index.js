const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const flickrRouter = require('./routes/flickrAPI');
const regionRouter = require('./routes/countryAPI');
const countryInforRouter = require('./routes/countryInfoAPI');
const airQuaility = require('./routes/countryWeather');
const ddbAdd = require('./ddb_additem')

// Serve out any static assets correctly
app.use(express.static('../client/build'))

// What's your favorite animal?
app.use('/ddb',ddbAdd); 
app.use('/country',regionRouter); 
app.use('/flickr',flickrRouter); 
app.use('/info',countryInforRouter); 
app.use('/air',airQuaility); 
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
