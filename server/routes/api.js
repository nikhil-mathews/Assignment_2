const express = require('express');
const router = express.Router();
var request = require('request');

/* GET api listing. */
router.get('/api', (req, res) => {
  res.send('api works');
});
router.get('/search', (req, res) => {
  console.log(req.query);
  API_KEY = 'AIzaSyCnNfklp2ko9Cu8DlCoDctH6cupJ8tJk-k';
  url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.query}&key=${API_KEY}`;
  

  request(url, (error, response, body) => {
    console.log(typeof body);
    res.send(JSON.parse(body));
  });
  console.log(url);
  //res.send('api works');
});

router.get('/restaurant', (req, res) => {
  console.log(req.query);
  API_KEY = 'AIzaSyCnNfklp2ko9Cu8DlCoDctH6cupJ8tJk-k';
  url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.query.query}&key=${API_KEY}`;
  

  request(url, (error, response, body) => {
    console.log(typeof body);
    res.send(JSON.parse(body));
  });
  console.log(url);
  //res.send('api works');
});

module.exports = router;