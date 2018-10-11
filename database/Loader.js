const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '54.183.132.245',
  database: 'related',
  port: 5432,
});
client.connect();

const getRelated = (id, callback) => {
  client.query(`SELECT * FROM relateditems WHERE id = ${id}`, callback);
  // query with productName
};

module.exports = { getRelated };
