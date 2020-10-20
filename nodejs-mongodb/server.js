const express = require('express')
const app = express()
const port = process.env.PORT || 8585
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./routes').default
routes(app)

app.listen(port)
console.log('Servidor corriendo...')