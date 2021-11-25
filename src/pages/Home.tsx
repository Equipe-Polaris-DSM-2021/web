import React from "react";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import bigrmap from "../img/big_r_map.png";
import lmap from "../img/l_map.png";
import rmap from "../img/r_map.png";
import btmm from "../img/btt_plus_minus.png";
import btms from "../img/btt_map_sat.png";
import logo from "../img/logo_polaris.png";
import Logo from "../components/Logo";

import "../styles/pages/home.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="header">
        <div id="div_header_logo">
          <img id="header_logo" src={logo} alt="Logo" />
        </div>
        <h1 id="header_title">Polaris</h1>
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
        <div id="block_one">
          <h1 id="block_one_title">
            Um jeito simples e rápido de <br />
            consumir imagens de satélites
          </h1>
          <p id="block_one_paragraph">
            Com poucos cliques, acesse imagens de diversos satélites
            <br />
            disponíveis, definindo as opções de visualização de acordo
            <br />
            com sua preferência.
          </p>
          <div id="div_buttons_block_one">
            <img id="button_plus_minus" src={btmm} alt="Exemplo de Mapa" />
            <img id="button_map_satellite" src={btms} alt="Exemplo de Mapa" />
          </div>
          <div id="big_r_side_map">
            <img id="big_r_map" src={bigrmap} alt="Exemplo de Mapa" />
          </div>
        </div>

        <div id="block_two">
          <div id="map_txt2">
            <div id="l_side_map">
              <img id="l_map" src={lmap} alt="Exemplo de Mapa" />
            </div>
            <div>
              <h1 id="block_two_title">Satélites disponíveis</h1>
              <p id="block_two_paragraph">
                Disponibilizamos uma série de satélites para que você
                <br />
                selecione de acordo com sua necessidade no momento.
                <br />
                Veja abaixo as opções:
              </p>
            </div>
          </div>
          <div id="div_satellites">
            <button className="satellite_button">Landsat 8</button>
            <button className="satellite_button">Sentinel 1 e 2</button>
            <button className="satellite_button">CBERS 4</button>
            <button className="satellite_button">CBERS 4A</button>
            <button className="satellite_button">Amazônia 1</button>
          </div>
        </div>

        <div id="block_three">
          <div>
            <h1 id="block_three_title">
              Download de imagens <br />
              selecionadas
            </h1>
            <p id="block_three_paragraph">
              Selecionando a área de interesse, ainda é possível fazer o
              download da imagem da região de duas formas: como{" "}
              <span>imagem bruta</span> ou como <span>imagem processada</span>.
              Basta clicar no ícone da área de interesse, escolher uma das
              opções e fazer o download.
            </p>
          </div>
          <div id="r_side_map">
            <img id="r_map" src={rmap} alt="Exemplo de Mapa" />
          </div>
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
