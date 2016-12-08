const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./knex');


app.get('/show', (req, res) => {
knex('show')
.select()
// .first()
.then(show => {
res.json(show);
});
});

app.get('/show:id', (req, res) => {
knex('show')
.where('id', req.params.id)
// .first()
.then(show => {
res.json(show);
});
});

app.put('/show/:id', function(req, res){

  knex('show')
  .where('id', req.params.id)
  .update({
    date: req.body.date,
    location: req.body.location
  })
  .then(function(result){
    res.json(result);
  });

});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
