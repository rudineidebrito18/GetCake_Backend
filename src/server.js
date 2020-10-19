const express = require('express')
const bodyParser = require('body-parser')
const sql = require('mssql')

const router = require('./routes')

const connStr = "Server=172.17.0.1;Database=GetCake;User Id=SA;Password=Pim@1234;";
const port = 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err))

app.use('/', router)

app.listen(port);
console.log('API funcionando!');