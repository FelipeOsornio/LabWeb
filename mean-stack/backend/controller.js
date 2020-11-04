import mongodb from 'mongodb';

const { MongoClient } = mongodb;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegosdb';

const mongoPreferences = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

export const listaConsolas = async (_, res) => {
    try {
        const connection = await MongoClient.connect(url, mongoPreferences);

        const db = connection.db(dbName);
        const result = await db.collection('plataforma').find().toArray();

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error recuperando lista de consolas' });
    }
}

export const obtenerConsolar = async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await MongoClient.connect(url, mongoPreferences);

        const db = connection.db(dbName);
        const result = await db.collection('plataforma').findOne({ "_id": parseInt(id) });

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error recuperando lista de consolas' });
    }
}

export const obtenerJuegosPorConsola = async (req, res) => {
    const { idconsola } = req.params;

    try {
        const connection = await MongoClient.connect(url, mongoPreferences);

        const db = connection.db(dbName);
        const result = await db.collection('plataforma').findOne({ "_id": parseInt(idconsola) });

        res.json(result.juegos);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error recuperando lista de consolas' });
    }
}

export const obtenerJuegoPorConsola = async (req, res) => {
    const { idconsola, idjuego } = req.params;

    try {
        const connection = await MongoClient.connect(url, mongoPreferences);

        const db = connection.db(dbName);
        const result = await db.collection('plataforma').findOne({ "_id": parseInt(idconsola) });

        res.json(result.juegos[idjuego]);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error recuperando lista de consolas' });
    }
}
