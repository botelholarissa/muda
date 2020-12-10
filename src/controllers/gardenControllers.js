const plantsCollection = require('../models/plantSchema');
const usersCollection = require('../models/userSchema');

const getTestById = (req, res) => {
    const userId = req.params.id;

    usersCollection.findById(userId, (error, user) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(user){
                const plants = user.plants[0]
            
                return res.status(200).send(plants);
            }
            else
                return res.status(404).send({ message: "Not found"})
        }
    })
}

module.exports = {
    //getAllPlantsWhitUserId
    getTestById
}