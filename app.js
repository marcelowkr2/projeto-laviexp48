const express = require('express');
const rotas = require('./src/routes/rotas');
const hasConection = require('./src/database/db');
const requestLog = require("./src/middlewares/log")
const app = express();

app.use('/', rotas);
app.use(requestLog);
app.use(express.json());



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});

