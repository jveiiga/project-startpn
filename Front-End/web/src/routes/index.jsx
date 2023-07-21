import  Login  from "../pages/Login"
import Register  from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "../pages/PrivateRoutes"



export const AppStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="Register" element={<Register />}></Route>
            <Route element={<PrivateRoutes />}>
                <Route path="Dashboard" element={<Dashboard />}></Route>
            </Route>
        </Routes>
    )
}
