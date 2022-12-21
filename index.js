const express = require('express');

require('dotenv').config();
const v1Router = require('./v1/routes');
require("./database/connectdb.js");

const app = express();

// server settings 
const PORT = process.env.PORT || 3000;

app.use('/api/v1', v1Router);

app.use((req, res) => res.status(404).send('<h1>Page Not Found</h1>'));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));

