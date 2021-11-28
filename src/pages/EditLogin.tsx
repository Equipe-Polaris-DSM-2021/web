import { useHistory, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import logo from "../img/logo_polaris.png";
import Logo from "../components/Logo";

import "../styles/pages/login.css";
import { Component } from "react";
import api from "../services/api";

import { logout } from "../services/auth.js";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory({ forceRefresh: true });

export default class EditLogin extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  deleteRegistration = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    try {
      await api.delete(`http://localhost:3333/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Cadastro deletado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Não foi possível deletar cadastro");
    }

    logout();
    history.push("/");
  };

  handleUpdate = async (e) => {
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
        await api.put(`http://localhost:3333/users/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Informações alteradas com sucesso!");
      } catch (error) {
        console.log(error);
        alert("Não foi possível alterar informações");
      }
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
        </div>
        <main>
          <div id="edit_login_container">
            <h1 id="login_title">Alteração de Usuário</h1>
            <form action="">
              <label htmlFor="email">Nome:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu novo nome"
                autoComplete="off"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    name: event.target.value,
                  });
                }}
                required
              ></input>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu novo e-mail"
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
                placeholder="Digite sua nova senha"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    password: event.target.value,
                  });
                }}
                required
              ></input>
              <p>
                Deseja deletar seu cadastro? Se sim,{" "}
                <button
                  id="delete"
                  onClick={this.deleteRegistration.bind(this)}
                >
                  clique aqui
                </button>
              </p>
              <div id="div_login_buttons">
                <div className="div_login_buttons">
                  <Link to="/">
                    <button id="signin_button">Voltar</button>
                  </Link>
                </div>
                <div className="div_login_buttons">
                  <button
                    type="submit"
                    id="login_button"
                    onClick={this.handleUpdate.bind(this)}
                  >
                    Salvar
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
