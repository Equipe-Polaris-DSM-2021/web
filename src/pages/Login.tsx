import { useHistory, Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";

import logo from "../img/logo_polaris.png";
import Logo from "../components/Logo";

import "../styles/pages/login.css";


export default function Login() {
  return (
    <div className="login" id="login">
      <div className="header">
        <div id="div_header_logo">
          <img id="header_logo" src={logo} alt="Logo" />
        </div>
        <Link to="/" id="header_title">
          <h1 id="header_title">Polaris</h1>
        </Link>

        <div id="div_header_button">
          <Link to="explore">
            <button id="header_button">Acessar o mapa</button>
          </Link>
        </div>
        <div id="login_header_button">
          <Link to="login">
            <button id="header_button_login">Login</button>
          </Link>
        </div>
      </div>
      <main>
        <div id="login_container">
          <h1 id="login_title">Login</h1>
          <form action="">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" autoComplete="off"></input>
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha"></input>
            <div id="div_login_buttons">
              <div id="div_login_buttons">
                <Link to="#">
                  <button id="signin_button">Criar Cadastro</button>
                </Link>
              </div>
              <div id="div_login_buttons">
                <Link to="#">
                  <button id="login_button">Entrar</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
      <div className="footer">
        <div id="div_footer_logo">
          <Logo />
        </div>
        <div id="div_footer_content">
          <p id="sb_proj">
            <a href="#home">Sobre o projeto</a>
          </p>
          <p>
            <Link id="div_map" to="explore">
              Acessar o mapa
            </Link>
          </p>
          <p>
            <Link
              id="div_github"
              to={{
                pathname: "https://github.com/Equipe-Polaris-DSM-2021/web",
              }}
              target="_blank"
            >
              <FaGithub />
              &nbsp;Confira o GitHub do projeto
            </Link>
          </p>
        </div>
        <div>
          <p id="div_footer_rights">2021 &copy; TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </div>
  );
}
