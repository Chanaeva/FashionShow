// Update with your config settings.
const dotenv = require ('dotenv')
dotenv.config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/FashionShow'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
