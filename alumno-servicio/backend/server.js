let express = require('express'),
    app = express(),
    port = process.env.PORT || 8585, bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

let routes = require('./collectionRoutes');

routes(app);
app.listen(port);
console.log('Servidor escuchando en puerto: ' + port);
