const Users = require("../models/Users")
const { compare } = require("bcrypt")
const jwt = require("jsonwebtoken")

class ControllerUsers {

    async storage(req, res) {

        try {

            const { name, email, password } = req.body

            const user = await Users.findOne({ where: { email } })

            if (user) {

                res.status(401).json({ message: "Email já cadastrado!" })

            } else {

                const user = await Users.create({ name, email, password })

                res.status(200).json({ user })
            }

        } catch (error) {

            res.status(400).json(error.message)
        }
    }

    async login(req, res) {

        try {
            
            const { email, password } = req.body

            const user = await Users.findOne({ 
                where: { email },
                attributes: [ "id", "name", "email", "password"]
            })

            if (!user) {

                res.status(401).json({ message: "Nenhum usuário encontrado!" })
            } 

            const checkPassword = await compare(password, user.password)
            if (!checkPassword) {
                
                res.status(401).json({ message: "Email ou senha inválido!" })
            }
            
            const tokenUser = jwt.sign({
                
                email: user.email,
            },
            process.env.TOKEN_CLIENT,
            {
                subject: user.id.toString(),
                expiresIn: "24h",
            })

            return res.json({id: user.id, name: user.name, tokenUser})
            
        } catch (error) {

            res.status(400).json({ error: "Problemas ao logar!" })
        }
    }
}

module.exports = new ControllerUsers