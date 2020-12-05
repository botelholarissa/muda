const usersCollection = require('../models/userSchema');

const getAll = (req, res) => {
    usersCollection.find((error, users) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(users);
    })
}

const getById = (req, res) => {
    id = req.params.id;

    usersCollection.findById(id, (error, user) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(user !== null)
                return res.status(200).send(user);
            else
                return res.status(404).send({ message: "User doesn't exist in database."});
        }
    })
}

module.exports = {
    getAll,
    getById
}