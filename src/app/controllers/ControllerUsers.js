const Users = require("../models/Users")

class ControllerUsers{

    async storage(req, res) {
        
        try {

            const { name, email, password } = req.body

            const user = await Users.findOne({ where: { email }})

            if (user) {
                
                res.status(401).json({ message: "Email already exist" })
            
            } else {

                const user = await Users.create({ name, email, password })

                res.status(200).json({ user })
            }

        } catch (error) {

            res.status(400).json(error.message)
        }
    } 
}

module.exports = new ControllerUsers