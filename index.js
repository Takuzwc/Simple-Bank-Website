/*----Postgresql database--------*/
const Client = require('pg').Client;
const client = new Client({
  user: 'Taku',
  password: 'takunda',
  host: 'localhost',
  port: 5432,
  database: 'Bank Of Aquarius',
});

client
  .connect()
  .then(() => console.log('Connected successfuly'))
  .catch(e => console.log(e))
  .finally(() => client.end());
