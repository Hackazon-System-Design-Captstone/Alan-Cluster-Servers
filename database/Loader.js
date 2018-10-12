const { Client } = require('pg');

const client = new Client({
  user: 'alan',
  host: 'ec2-13-57-218-103.us-west-1.compute.amazonaws.com',
  database: 'sdc',
  password: 'alanfu1337',
  port: 5432,
});

client.connect((err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log('I\'m connected bro!');
  }
});

const getRelated = (id, callback) => {
  client.query(`SELECT * FROM related WHERE id = ${id}`, callback);
  // query with productName
};

module.exports = { getRelated };
