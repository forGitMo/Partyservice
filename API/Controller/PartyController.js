const partyModel = require("../Models/PartyModel.js");

const getAll = (req, res) => {
    partyModel.getAll().then(data => {
        res.send(data);
    });
}

const createParty = (req, res) => {
    for (const party of req.body) {
        console.log(req.body)
        partyModel.create(party).then(data => {
            res.send(data);
        })
    }
}

const removeParty = (req, res) => {
    partyModel.remove(req.params.id).then(result => {
        res.send(result)
    })
}

module.exports = {
    getAll,
    createParty,
    removeParty
}