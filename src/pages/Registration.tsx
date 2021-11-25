import React, { Component } from "react";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../img/logo_polaris.png";
import Logo from "../components/Logo";
import "../styles/pages/registration.css";
import api from "../services/api";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory({ forceRefresh: true });

export default class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  insertUser = async (e) => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const data = {
      name,
      email,
      password,
    };

    if (name === "" || password === "" || email === "") {
      alert("Preencha todos os campos.");
    } else {
      try {
        await api.post("http://localhost:3333/users", data);
        alert("Cadastrado com sucesso!");
        history.push("/login");
      } catch (error) {
        console.log(error);
        alert("Não foi possível realizar cadastro.");
      }
    }
  };

  render() {
    return (
      <div id="registration_page">
        {/* HEADER --------------------------------------------------- */}
        <div className="header">
          <div id="div_header_logo">
            <img id="header_logo" src={logo} alt="Logo" />
          </div>
          <h1 id="header_title">Polaris</h1>
          <div id="login_header_button">
            <Link to="explore">
              <button id="header_button">Acessar o mapa</button>
            </Link>
          </div>
        </div>

        {/* MAIN --------------------------------------------------- */}
        <main>
          <div className="register_user_container">
            <h1 className="title">Cadastro de Usuário</h1>
            <form
              className="register_user_form"
              onSubmit={this.insertUser.bind(this)}
            >
              <div className="user_data">
                <label>
                  Nome:
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    name="name"
                    id="name"
                    onChange={(event) => {
                      this.setState({
                        ...this.state,
                        name: event.target.value,
                      });
                    }}
                    required
                  />
                </label>
                <label>
                  E-mail:
                  <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    name="email"
                    id="email"
                    onChange={(event) => {
                      this.setState({
                        ...this.state,
                        email: event.target.value,
                      });
                    }}
                    required
                  />
                </label>
                <label>
                  Senha:
                  <input
                    type="password"
                    placeholder="Digite uma senha"
                    name="password"
                    id="password"
                    onChange={(event) => {
                      this.setState({
                        ...this.state,
                        password: event.target.value,
                      });
                    }}
                    required
                  />
                </label>
              </div>
              <div className="options">
                <div id="already_registered_container">
                  <Link to="login">
                    <button id="already_registered">Já tenho cadastro</button>
                  </Link>
                </div>

                <button type="submit" id="register">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* FOOTER --------------------------------------------------- */}
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
