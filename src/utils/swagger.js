const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
    servers: [
      {
          url: "http://localhost:3000/api/v1"
      },
    ],
  },
  apis: ['./docs/v1/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
