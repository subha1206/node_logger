const express = require('express');
const morgan = require('./utils/morgan');

const logger = require('./utils/logger');

const app = express();
const PORT = 8080;

app.use(morgan);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  logger.info(`Server is up and running @ http://localhost:${PORT}`);
});
