const express = require('express');
const router = express.Router();




// declare axios for making http requests
const axios = require('axios');


/* GET api listing. */
router.get('/', (req, res) => {

  res.send('api works');

});


// Get all posts
router.get('/ajoutobjet', (req, res) => {

   // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4201');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');




  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get('http://localhost:3000/objets')
  
    .then(objets => {
      res.status(200).json(objets.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });

    
});


module.exports = router;

