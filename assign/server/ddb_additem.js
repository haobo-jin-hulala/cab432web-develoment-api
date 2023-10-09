// Load the AWS SDK for Node.js
require('dotenv').config();
var AWS = require('aws-sdk');
const express = require('express');
const https = require('https');
const router = express.Router();
const axios = require('axios');
AWS.config.update({region: 'ap-southeast-2'});
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


router.get('/add', (req, res) => {
  var describParams = {
    TableName: "10642536"
  };
  
  // Call DynamoDB to retrieve the selected table descriptions
  // if table not exit ,return error information
  ddb.describeTable(describParams, function(err, data) {
    if (err) {
      console.log("TABLE not exit",err);
      // Call DynamoDB to create the table
    } else {
      console.log("Success", data.Table.KeySchema);
    }
  });
  var count;
  var getParam = {
    TableName: '10642536',
    Key: {
        'qut-username': {S: 'n10642536@qut.edu.au'},
        'my-basic-key':{S:'01234567'},
    }
    };
  // Call DynamoDB to add the item to the table
  ddb.getItem(getParam, function(err, data) {
    if (err) {
    console.log("Error", err);
    } else {
    console.log("Success", data.Item.count);
    //count number +1
    count = (parseInt(data.Item.count["N"])+1).toString()
    }
    var putParam = {
      TableName: '10642536',
      Item: {
        'qut-username': {S: 'n10642536@qut.edu.au'},
        'my-basic-key':{S:'01234567'},
        count:{ N:count}
      }
    };
    //change data
    ddb.putItem(putParam, function(err, data) {
      console.log(count)
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
        res.json({"N":count})
      }
    });
});
});
module.exports = router;

