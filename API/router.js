const partyController = require('./Controller/PartyController')

module.exports = app => {
    app.get("/api/party", (req, res) => {
        partyController.getAll(req, res)
        console.log("GET party")
    }),
    app.post("/api/party", (req, res) => {
        partyController.createParty(req, res)
        console.log("POST party")
    }),
    app.delete("/api/party/:id", (req, res) => {
        partyController.removeParty(req, res)
        console.log("REMOVE party")
    })
}