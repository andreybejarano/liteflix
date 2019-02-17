require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = require('./config');
const routerApi = require('./api/router');
const ssr = require('./middlewares/ssr');

const server = express();

if (config.env !== 'production') {
  server.use(morgan('dev'));
}

server.use('/api', routerApi);

server.use('/dist', express.static(path.join(__dirname, '../../dist')));
server.use('/static', express.static(path.join(__dirname, '../../dist/assets')));

server.get('*', ssr);

server.listen(config.port, () => {
  console.log(`Listening on: http://localhost:${config.port} env: ${config.env}`);
});
