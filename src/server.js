const app = require("./app")

const server = app.listen(3001, () => {
    try {
        console.log("Server running on port 3001")
    } catch (error) {
        console.log(error)
    }
})

module.exports = server