// Server code goes here

//Imports

const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const createRouter = require('./helpers/create_router');

app.use(parser.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db('glasgow_street_art');
    const muralCollection = db.collection('murals');
    const muralRouter = createRouter(muralCollection);
    app.use('/api/murals', muralRouter);
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
})