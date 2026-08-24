const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const routes = require('./app/routes/routes');
app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));