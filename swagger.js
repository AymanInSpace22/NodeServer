const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Your API description',
    },
  },
  apis: ['index.js'], // Path to the API files with Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
