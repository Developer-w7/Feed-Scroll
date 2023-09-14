#!/usr/bin/env node

const http = require("http");
const https = require('https');
// Port Environment variable
const PORT = process.env.PORT || 5001;

var express = require('express');
var cors = require('cors')



function getId(page_no) {
    const https = require('https');
    let id = '';
    let data = '';
    const url = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page_no}`;
    return new Promise((resolve, reject) => {
      https
        .get(url, (response) => {
          response.on('data', (chunk) => {
            data += chunk;
          });
          response.on('end', () => {
            resolve( JSON.parse(data));
          });
        })
        .on('error', reject);
    });
    //return id
  };
  
  
//   (async () => {
//     const responseObject = await getId(1);
//     console.log(responseObject)
//   })();


const hostname = '127.0.0.1';
const port = 5001;
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get('/gallery/:id', async function(req, res, next ){
    var id = req.params.id;
    const responseObject = await getId(id);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(responseObject);
   
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });