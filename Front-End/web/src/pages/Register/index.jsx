import { Link } from "react-router-dom"
import ThowColumnLayout from "../../layouts/ThowColumnLayout"
import Button from "../../components/Button"
import Input from "../../components/Input"
import steveJobsImage from "../../images/Svg/stevejobs.svg"
import logo from "../../images/Svg/logo.svg"

export const Register = () => {

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
        height: "55rem",
        width: "41rem",
      }}>
      <div>
        <img src={logo} alt="logo fictício" style={{ width: "230px", height: "150px" }} />
      </div>

      <p className="text_title">Cadastro</p>

      <form>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <label className="text_label" htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              height="3.16rem"
              width="18.12rem"
              border="1px solid #D7D7D7"
              borderRadius="12px"
              placeholder="Insira seu nome"
              paddingLeft="1rem"
              marginTop="0.8rem"
              marginBottom="2rem"
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <label className="text_label" htmlFor="email">E-mail</label>
            <Input
              type="email"
              id="email"
              height="3.16rem"
              width="18.12rem"
              border="1px solid #D7D7D7"
              borderRadius="12px"
              placeholder="Insira seu e-mail"
              paddingLeft="1rem"
              marginTop="0.8rem"
              marginBottom="2rem"
            />
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",

        }}>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <label className="text_label" htmlFor="password">Senha</label>
            <Input
              type="password"
              id="password"
              height="3.16rem"
              width="18.12rem"
              border="1px solid #D7D7D7"
              borderRadius="12px"
              placeholder="Insira sua senha"
              paddingLeft="1rem"
              marginTop="0.8rem"
              marginBottom="2rem"
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <label className="text_label" htmlFor="passwordConfirm">Confirma senha</label>
            <Input
              type="password"
              id="passwordConfirm"
              height="3.16rem"
              width="18.12rem"
              border="1px solid #D7D7D7"
              borderRadius="12px"
              placeholder="Confirma senha"
              paddingLeft="1rem"
              marginTop="0.8rem"
              marginBottom="2rem"
            />
          </div>
        </div>

        <p className="text_terms_privacy">Termos de uso e privacidade</p>

        <div>
          <div
            style={{
              height: "2.5rem"
            }}>
            <input type="checkbox" id="check" />
            <label className="text_confirm" htmlFor="check">
              Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa.
            </label>
          </div>

          <Link className="text_terms_privacy_link">Termos de uso e Privacidade</Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            className="text_btn"
            name="Cadastrar"
            width="16.68rem"
            height="3rem"
            background="#476EE6"
            color="#FFFFFF"
            borderRadius="60px"
            border="none"
            marginTop="4rem"
            cursor="pointer"
          />
        </div>
      </form>

      <div 
        style={{
          display: "flex",
          height: "15rem",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: "4rem",
        }}>
        <p className="text_question">Já tem uma conta?</p>
        <Link className="text_link" to="/">Login</Link>
      </div>

    </div>
  )

  return (
    <ThowColumnLayout
      colum1Data={colum1Data}
      colum2Data={colum2Data}
      page="Register"
    />
  )
}