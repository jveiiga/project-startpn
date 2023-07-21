import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import api from "../services/api"
import { toast } from "react-toastify"

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadUser = async () =>  {

            const token = localStorage.getItem("@TOKEN")

            if (token) {

                try {

                    api.defaults.headers.authorization = `Bearer ${token}`

                    // const { data } = await api.get("/login")

                    // setUser(data)

                } catch (error) {

                    console.error(error)
                }
            }
            setLoading(false)
        } 
        loadUser()

     },[])

    const loginUser = async (data) => {

        try {
            const res = await api.post("/login", data)

            toast.success("Bem vindo de volta!")

            const {user: userRespone, tokenUser} = res.data

            api.defaults.headers.authorization = `Bearer ${tokenUser}`

            setUser(userRespone)

            localStorage.setItem("@TOKEN", tokenUser)

            navigate("/Dashboard", { replace: true})

        } catch (error) {

            toast.error("Problemas ao logar!")

            console.log(error)
        }
    }

  return (
    <>
        <AuthContext.Provider value={{
            loading, 
            loginUser,
            user
        }}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider