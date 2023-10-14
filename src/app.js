const express = require('express');
const routes = require('./routes');
const { db } = require('./config');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger'); 

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(`/${db.API}`, routes);

app.listen(db.PORT, () => {
    console.log(`Server is running on port ${db.PORT}`);
})