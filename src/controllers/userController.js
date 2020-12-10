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

const addUser = (req, res) => {
    const userBody = req.body;
    const user = new usersCollection(userBody);

    user.save((error) => {
        if(error)
            return res.status(400).send(error);
        else 
            return res.status(200).send(user)
    })
}

const updateUser = (req, res) => {
    const id = req.query.id;
    const userBody = req.body;
    const update = { new: true };

    usersCollection.findByIdAndUpdate(
        id,
        userBody,
        update,
        (error, user) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(user)
                    return res.status(200).send(user); 
                else 
                    return res.status(404).send({ message: "User doesn't exist in database"});
            }
        })
}

const deleteUser = (req, res) => {
    const id = req.query.id;

    usersCollection.findByIdAndDelete(id, (error, user) => {
        console.log(user)
        if(error)
            return res.status(500).send(error);
        else {
            if(user)
                return res.status(200).send({ message: "User has been deleted."})
            else
                return res.status(404).send({ message: "User doesn't exist in database"})
        }
    })
}

module.exports = {
    getAll,
    getById,
    addUser,
    updateUser,
    deleteUser
}