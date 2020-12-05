const plantsCollection = require('../models/plantSchema');

const getAll = (req, res) => {
    plantsCollection.find((error, plant) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(plant);
    })
}



module.exports = {
    getAll,
    
}