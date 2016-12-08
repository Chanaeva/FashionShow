var environment = process.env.NODE_ENV || 'postgres://localhost/FashionShow';
var config = require('./knexfile.js')[environment];
module.exports = require('knex')(config);
