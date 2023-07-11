const { Router } = require("express")
const ControllerUsers = require("./app/controllers/ControllerUsers")

const routes = Router()

routes.post("/user", ControllerUsers.storage)

module.exports = routes