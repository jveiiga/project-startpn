const { Sequelize } = require("sequelize")
const database = require("../../database")
const hashPwd = require("../middlewares/hashPwd.middleware")

const User = database.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.toString(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.toString(50),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(80),
        allowNull: false,
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, {
    hooks: {
        beforeCreate: (instance) => {
            instance.created_at = new Date()
            instance.updated_at = new Date()
        },
        beforeUpdate: (instance) => {
            instance.updated_at = new Date()
        },
    }
})

User.beforeCreate(async (users) => {
    users.password = await hashPwd(users.password)
})

module.exports = User