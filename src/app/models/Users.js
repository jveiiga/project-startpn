const { Model, DataTypes } = require("sequelize")
const hashPwd = require("../middlewares/hashPwd")

class Users extends Model {

    static init(sequelize) {

        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING(80),
                    allowNull: false,
                },
                created_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                updated_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                }
            },
            {
                sequelize,
                createdAt: 'created_at',
                updatedAt: 'updated_at',
            },
            {
                hooks: {
                    beforeCreate: (instance, option) => {
                        instance.created_at = new Date()
                        instance.updated_at = new Date()
                    },
                    beforeUpdate: (instance, option) => {
                        instance.updated_at = new Date()
                    }
                },
            })

        Users.beforeCreate(async (users, option) => {
            const hashedPassword = await hashPwd(users.password)
            users.password = hashedPassword
        })
    }
}

module.exports = Users