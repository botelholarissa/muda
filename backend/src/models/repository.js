const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/muda"; 

const connect = () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true});
    const connection = mongoose.connection;

    connection.on('error', () => console.error('Error ao conectar.'));
    connection.once('open', () => console.log('Conectamos no Mongo'));
}

module.exports = { connect };