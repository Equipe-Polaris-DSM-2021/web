import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import logo from "../img/logo_polaris.png";
import Logo from "../components/Logo";
import { isAuthenticated } from "../services/auth.js";
import createBrowserHistory from "history/createBrowserHistory";

import "../styles/pages/login.css";
import { Component } from "react";
import api from "../services/api";

const history = createBrowserHistory({ forceRefresh: true });

export default class Login extends Component {
  // history: any;
  authenticated: boolean;

  constructor(props) {
    super(props);
    // this.history = createBrowserHistory();
    this.authenticated = isAuthenticated();
  }

  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    if (this.authenticated) {
      console.log("Authenticated");
      history.push("/");
    }
  }

  handleLogin = async (e) => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    const data = {
      email,
      password,
    };

    try {
      const response = await api.post("/auth", data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
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
            <Link to="Editlogin">
              <button id="header_button_login">Perfil</button>
            </Link>
          </div>
        </div>
        <main>
          <div id="login_container">
            <h1 id="login_title">Login</h1>
            <form action="" onSubmit={this.handleLogin.bind(this)}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                autoComplete="off"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    email: event.target.value,
                  });
                }}
                required
              ></input>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    password: event.target.value,
                  });
                }}
                required
              ></input>
              <div id="div_login_buttons">
                <div className="div_login_buttons">
                  <Link to="Registration">
                    <button id="signin_button">Criar Cadastro</button>
                  </Link>
                </div>
                <div className="div_login_buttons">
                  <button type="submit" id="login_button">
                    Entrar
                  </button>
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
            <p id="div_footer_rights">
              2021 &copy; TODOS OS DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </div>
    );
  }
}
