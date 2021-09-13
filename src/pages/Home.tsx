import { FaGithub } from "react-icons/fa"
import {Link} from "react-router-dom"

import Logo from "../components/Logo"


import "../styles/pages/home.css"
// import bigrmap from "./img/big_r_map.png"
// import lmap from "./img/l_map.png"
// import rmap from "./img/r_map.png"
// import logo from "./img/logo_polaris.png"


export default function Home() { 
  return ( 
    <div className="grid_home">
      <div className='Header'>
        <div id="polarLogo">
          <Logo />
        </div>
        <Link to="map">
          <button id="bt_yellow">Acessar o mapa</button>
        </Link>
      </div>

      <div id='b1'>
        <div id="s1">
          <h1>Um jeito simples e rápido de <br/>consumir imagens de satélites</h1>
          <p>
            Com poucos cliques, acesse imagens de diversos satélites disponíveis,
            definindo as opções de visualização de acordo com sua preferência. 
          </p>
          <button id='button1'> &#43; &#124; &minus;</button>
          <button id='button2'>Mapa &#124; Satélite</button>
        </div>
        <div id="big_r_side_map">
          {/* <img id="big_r_map" src={bigrmap}  alt="Exemplo de Mapa" /> */}
        </div>
      </div>

      <div id='b2'>
        <div id="l_side_map">
          {/* <img id="l_map" src={lmap}  alt="Exemplo de Mapa" /> */}
        </div>
        <div id="s2">
          <h1>Satélites disponíveis</h1>
          <p>
            Disponibilizamos uma série de satélites para que você selecione de acordo
            com sua necessidade no momento. Veja abaixo as opções:
          </p>
        </div>
        <div id='sats'>
          <button className="bt_whyl">Landsat 8</button>
          <button className="bt_whyl">Sentinel 1 e 2</button>
          <button className="bt_whyl">CBERS 4</button>
          <button className="bt_whyl">CBERS 4A</button>
          <button className="bt_whyl">Amazônia 1</button>
        </div>
      </div>

      <div id="b3">
        <div id='s3'>
          <h1>Download de imagens selecionadas</h1>
          <p>
            Selecionando a área de interesse, ainda é possível fazer o download da
            imagem da região de duas formas: como imagem bruta ou como imagem
            processada. Basta clicar no ícone da área de interesse, escolher uma das
            opções e fazer o download.
          </p>
        </div>
        <div id="r_side_map">
          {/* <img id="r_map" src={rmap} alt="Exemplo de Mapa" /> */}
        </div>
      </div>


      <div className="Footer">
        <Logo />
        <div id='fct'>
          <p>Sobre o projeto</p>
          <p>Acessar o mapa</p>
          <p><FaGithub />&nbsp;Confira o GitHub do projeto</p>
        </div>
        <div id='fdr'>
          <p>2021 &copy; TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </div>
  )
}
