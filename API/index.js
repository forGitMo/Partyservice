const { getAll, showData, create, remove } = require('./Models/PartyModel.js');
const partyFunctions = require('./Models/PartyModel.js');

console.log("\nGetAll\n");
    getAll()
    .then(showData);
