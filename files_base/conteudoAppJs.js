export const conteudoApp = `
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT;
const router = require('./src/router/router');

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
    console.log("app running at Port http://localhost:3333");
});
`
