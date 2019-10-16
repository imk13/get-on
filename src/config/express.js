const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const middlewares = require('../api/middlewares');
const routes = require('../api/routes/v1');
const { logs } = require('./vars');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
  info: {
    title: 'Get on Swagger API doc',
    version: '1.0.0',
    description: 'To keep record of patient intervention documents',
  },
  host: 'localhost:9090',
  basePath: '/api/v1'
};
/**
 * https://stackoverflow.com/questions/56781385/no-operations-defined-in-spec-i-get-this-error-even-though-the-swagger-is-set
 */
const options = {
  swaggerDefinition,
  apis: ['./src/api/routes/v1/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
/**
* Express instance
* @public
*/
const app = express();

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//setting up swagger API doc path to serve
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// mount api v1 routes
app.use('/api/v1', routes);

// add error handler
app.use(middlewares.errHandler);

module.exports = app;