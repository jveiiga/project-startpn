const jwt = require("jsonwebtoken")
const { promisify } = require("util")

module.exports = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {

        return res.status(401).json({ error: "Token não existe!" })
    }
  
    const [, token] = authHeader.split(" ")

    try {

        const decode = await promisify(jwt.verify)(token,process.env.TOKEN_CLIENT)
        
    } catch (error) {
        
        return res.status(401).json({ error: "Token inválido!" })
    }

    return next()
}