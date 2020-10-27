const express = require('express')
const bodyParser = require('body-parser')
const sql = require('mssql')

const sqlConfig = require('./config/database')
const router = require('./routes')
   
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sql.connect(sqlConfig)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err))

app.use('/', router)

app.listen(3001);
console.log('API funcionando!');