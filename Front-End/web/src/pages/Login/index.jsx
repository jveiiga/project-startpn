import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import ThowColumnLayout from "../../layouts/ThowColumnLayout"
import Button from "../../components/Button"
import Input from "../../components/Input"
import steveJobsImage from "../../images/Svg/stevejobs.svg"
import logo from "../../images/Svg/logo.svg"

const Login = () => {

  const { loginUser } = useContext(AuthContext)
  const [formData, setFormData] = useState({email: "", password: ""})

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value}))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(formData);
    } catch (error) {
      console.log(error);
    }
  }

  const colum1Data = (
    <div
      style={{
        backgroundImage: `url(${steveJobsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
    ></div>
  )
  const colum2Data = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // border: "1px solid black",
        height: "31.25rem",
        width: "27.4rem",
      }}>

      <div>
        <img src={logo} alt="logo fictício" />
      </div>

      <p className="text_title">Dados de acesso</p>

      <form onSubmit={handleFormSubmit}>
        <label className="text_label" htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          height="3.16rem"
          width="26.12rem"
          border="1px solid #D7D7D7"
          borderRadius="12px"
          placeholder="Insira seu e-mail"
          paddingLeft="1rem"
          marginTop="0.5rem"
          marginBottom="2rem"
        />

        <label className="text_label" htmlFor="password">Senha</label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          height="3.16rem"
          width="26.12rem"
          border="1px solid #D7D7D7"
          borderRadius="12px"
          placeholder="Insira sua senha"
          paddingLeft="1rem"
          marginTop="0.5rem"
        />
      </form>

      <div style={{
        marginTop: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Button
          className="text_btn"
          name="Entrar"
          width="11.56rem"
          height="3rem"
          background="#476EE6"
          color="#FFFFFF"
          borderRadius="60px"
          border="none"
          cursor="pointer"
          onClick={handleFormSubmit}
        />
        <Link className="text_link" to="/Register">Esqueceu sua senha?</Link>
      </div>

    </div>
  )

  return (
    <ThowColumnLayout
      colum1Data={colum1Data}
      colum2Data={colum2Data}
      page="Login"
    />
  )
}

export default Login