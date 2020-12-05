const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/muda"; 

const connect = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,  
        useCreateIndex: true,  
        useFindAndModify: false, 
        useUnifiedTopology: true} );
    const connection = mongoose.connection;

    connection.on('error', () => console.error('Err'));
    connection.once('open', () => console.log('MongoDB connected'));
}

module.exports = { connect };