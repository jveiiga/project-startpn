import { Link } from 'react-router-dom';
import ThowColumnLayout from "../../layouts/ThowColumnLayout"
import Button from "../../components/Button"
import Input from "../../components/Input"
import steveJobsImage from "../../images/Svg/stevejobs.svg"
import logo from "../../images/Svg/logo.svg"

export const Login = () => {

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

      <p className="text_title_login">Dados de acesso</p>

      <label className="text_placeholder" htmlFor="email">E-mail</label>
      <Input
        id="email"
        height="3.16rem"
        width="26.12rem"
        border="1px solid #D7D7D7"
        borderRadius="12px"
        placeholder="Insira seu e-mail"
        paddingLeft="1rem"
        marginTop="0.5rem"
        marginBottom="2rem"
      />

      <label className="text_placeholder" htmlFor="password">Senha</label>
      <Input
        id="password"
        height="3.16rem"
        width="26.12rem"
        border="1px solid #D7D7D7"
        borderRadius="12px"
        placeholder="Insira sua senha"
        paddingLeft="1rem"
        marginTop="0.5rem"
      />


      <div style={{
        marginTop: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Button
          className="text_btn_enter"
          name="Entrar"
          width="11.56rem"
          height="3rem"
          background="#476EE6"
          color="#FFFFFF"
          borderRadius="60px"
          border="none"
        />
        <Link className="text_link" to="#">Esqueceu sua senha?</Link>
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