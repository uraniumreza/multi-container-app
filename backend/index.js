const configs = require('./configs');

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const pgClient = new Pool({
  user: configs.pgUser,
  host: configs.pgDatabase,
  database: configs.pgDatabase,
  password: configs.pgPassword,
  port: configs.pgPort
});
pgClient.on('error', () => console.log('PostgreSQL connection is lost!!'));

pgClient
  .query(`CREATE TABLE IF NOT EXISTS readers (
    id serial PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    phone VARCHAR (11) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL
  )`)
  .catch(err => console.error(err));

const redis = require('redis');
const redisClient = redis.createClient({
  host: configs.redisHost,
  port: configs.redisPort,
  retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();

app.get('/', (req, res) => {
  res.send("Hello");
});

app.get('/users/:id', async (req, res) => {
  var id = req.params.id;
  const user = await pgClient.query(`SELECT * from users WHERE id = ${id}`);
  console.log("USER: ", user);
  res.send(user);
});

app.listen(4000, err => {
  console.log("Backend server is running on port 4000");
});
