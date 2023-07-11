const bcrypt = require("bcrypt")

const hashPwd = async (password) => {
    try {
        const rounds = 10

        const hashedPwd = await bcrypt.hash(password, rounds)

        return hashedPwd

    } catch (error) {
        
        throw new Error("Error generating password hash")
    }
}

module.exports = hashPwd