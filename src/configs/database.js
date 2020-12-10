const mongoose = require('mongoose');
const dotenv = require ('dotenv');

dotenv.config();

const DB_URI = process.env.DB_URI 

const connect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,  
        useCreateIndex: true,  
        useFindAndModify: false, 
        useUnifiedTopology: true} );
    const connection = mongoose.connection;

    connection.on('error', () => console.error('Err'));
    connection.once('open', () => console.log('MongoDB connected'));
}

module.exports = { connect };