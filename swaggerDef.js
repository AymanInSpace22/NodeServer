const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js']; // Update this with the path to your main Express file

const doc = {
  info: {
    title: 'Your API Title',
    description: 'Your API description',
    version: '1.0.0',
  },
  host: 'localhost:3000', // Update with your server's host and port
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js'); // Update with the path to your main Express file
});
