const plantsCollection = require('../models/plantSchema');

const getAll = (req, res) => {
    plantsCollection.find((error, plant) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(plant);
    })
}

const getById = (req, res) => {
    const id = req.params.id;

    plantsCollection.findById(id, (error, plant) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(plant)
                return res.status(200).send(plant);
            else
                return res.status(404).send({ message: "Not found"})
        }
    })
}

const addPlant = (req, res) => {
    const plantBody = req.body;
    const plant = new plantsCollection(plantBody);
  
    plant.save((error) => {
        if(error)
            return res.status(400).send(error);
        else
            return res.status(200).send(plant);
    })
 }

 const updatePlant = (req, res) => {
    const id = req.query.id;
    const plantBody = req.body;
    const update = { new: true };

    plantsCollection.findByIdAndUpdate(
        id,
        plantBody,
        update,
        (error, plant) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(plant)
                    return res.status(200).send(plant); 
                else 
                    return res.status(404).send({ message: "Plant doesn't exist in database"});
            }
        })
}

module.exports = {
    getAll,
    getById,
    addPlant,
    updatePlant
    
}