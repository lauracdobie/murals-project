//Importing
const express = require('express');
const ObjectID = require('mongodb').ObjectID;

//Creating router
const createRouter = function(collection){
  const router = express.Router();

  //Get all murals
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  //Get one mural
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne( {_id: ObjectID(id)} )
      .then(doc => res.json(doc))
      .catch(err => {
        console.error(500);
        res.json({ status: 500, error: err });
      });
  });

  //Update a mural

  //Delete a mural

  return router;

};

module.exports = createRouter;