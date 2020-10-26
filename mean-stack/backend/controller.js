import mongodb from 'mongodb';

const { MongoClient } = mongodb;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegosdb'

const throwErr = (err) => {
    if (err) {
        throw err;
    }
}

export const listaConsolas = (_, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, mdbclient) => {
        throwErr(err);

        const db = mdbclient.db(dbName);

        db.collection('plataforma').find().toArray((err, result) => {
            throwErr(err);
            mdbclient.close();
            res.end(JSON.stringify(result));
        })
    })
}