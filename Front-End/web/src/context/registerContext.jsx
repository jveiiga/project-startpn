import { createContext } from "react"
import PropTypes from "prop-types"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const RegisterContext = createContext({})

const RegisterProvider =  ({ children }) => {

    const navigate = useNavigate()

    const userStorage = async (data) => {
        
        try {
            await api.post("/user", data)

            navigate("/")

            toast.success("Usuário criado com sucesso!")

        } catch (error) {

            console.log(error)
        }
      
    }

    return (
        <>
            <RegisterContext.Provider value={{
                userStorage
            }}>
                { children }
            </RegisterContext.Provider>

        </>
    )
}

RegisterProvider.propTypes = {
    children: PropTypes.node,
}

export default RegisterProvider