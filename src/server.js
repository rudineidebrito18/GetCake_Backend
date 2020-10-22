const express = require('express')
const bodyParser = require('body-parser')
const sql = require('mssql')

const router = require('./routes')

const sqlConfig = {
    password: 'Pim@1234',
    database: 'GetCake',
    stream: false,
    options: {
      enableArithAbort: true,
      encrypt: false
    },
    port: 1433,
    user: 'sa',
    server: '172.17.0.1',
  }
const port = 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sql.connect(sqlConfig)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err))

app.use('/', router)

app.listen(port);
console.log('API funcionando!');