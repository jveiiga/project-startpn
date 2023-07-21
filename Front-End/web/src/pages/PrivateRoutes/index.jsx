import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
import { Dashboard } from "../Dashboard"

const isAuth = () => {

    const token = localStorage.getItem("@TOKEN")

    return token != undefined

}

const PrivateRoutes = () => {

    return isAuth() ? (

        <Dashboard />
    ) : (

        <Navigate to="/" />
    )
}

PrivateRoutes.propTypes = {
    path: PropTypes.string.isRequired,
    element: PropTypes.node.isRequired,
}

export default PrivateRoutes