import AuthProvider from "./context/authContext"
import { AppStack } from "./routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} position={"bottom-right"}/>
      <AuthProvider>
        <AppStack />
      </AuthProvider>
    </>
  )
}

export default App
