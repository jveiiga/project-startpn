const { Router } = require("express")
const ControllerUsers = require("./app/controllers/ControllerUsers")
const authenticationMiddleware = require("./app/middlewares/auth")
const routes = Router()

routes.post("/user", ControllerUsers.storage)
routes.post("/login", authenticationMiddleware, ControllerUsers.login)

module.exports = routes