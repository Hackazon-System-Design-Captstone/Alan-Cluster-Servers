const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'ec2-54-183-132-245.us-west-1.compute.amazonaws.com',
  database: 'products',
  port: 5432,
});
client.connect();
console.log('I\'m connected bro!');

const getRelated = (id, callback) => {
  client.query(`SELECT * FROM related WHERE id = ${id}`, callback);
  // query with productName
};

module.exports = { getRelated };
