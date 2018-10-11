const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'ec2-54-183-132-245.us-west-1.compute.amazonaws.com',
  database: 'related',
  port: 5432,
});
client.connect();
client.on('notice', (msg) => {
  console.log('Notice: ', msg);
})

const getRelated = (id, callback) => {
  client.query(`SELECT * FROM related WHERE id = ${id}`, callback);
  // query with productName
};

module.exports = { getRelated };
