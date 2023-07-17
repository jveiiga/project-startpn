const sequelize = require("sequelize")
const Users = require("../app/models/Users")

/*
Connection Database
*/

const connectionDatabase = require("../config/database.js")

const models = [Users]

class Database {
    constructor(){
        this.init()
    }

    init() {
        this.connection = new sequelize(connectionDatabase)

        models.map(model => model.init(this.connection))
    }
}

module.exports = new Database