import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {

    const mail = localStorage.getItem("@MAIL")

    return mail != undefined ? children : <Navigate to="/" />
}

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
  }