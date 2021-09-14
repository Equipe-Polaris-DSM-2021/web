import "../styles/pages/home.css"
import bigrmap from "../img/big_r_map.png"
import lmap from "../img/l_map.png"
import rmap from "../img/r_map.png"
import btmm from "../img/btt_plus_minus.png"
import btms from "../img/btt_map_sat.png"
import logo from "../img/logo_polaris.png"
import github from "../img/logo_github.png"


export default function Home() { 
  return ( 
    <div className="grid_home">
      <div className='header'>
        <div id="div_header_logo">
          <img id="header_logo" src={logo} alt="Logo" />
        </div>
        <h1 id='header_title'>Polaris</h1>
        <div id='div_header_button'>
          <a href="map.tsx"><button id="header_button">Acessar o mapa</button></a>
        </div>
      </div>

      <div id='block_one'>
          <h1 id="block_one_title">Um jeito simples e rápido de <br/>consumir imagens de satélites</h1>
          <p id="block_one_paragraph">
            Com poucos cliques, acesse imagens de diversos satélites 
            <br/>disponíveis, definindo as opções de visualização de acordo 
            <br/>com sua preferência.
          </p>
          <div id='div_buttons_block_one'>
            <img id="button_plus_minus" src={btmm}  alt="Exemplo de Mapa" />
            <img id="button_map_satellite" src={btms}  alt="Exemplo de Mapa" />
          </div>
        <div id="big_r_side_map">
          <img id="big_r_map" src={bigrmap}  alt="Exemplo de Mapa" />
        </div>
      </div>

      <div id='block_two'>
        <div id="l_side_map">
          <img id="l_map" src={lmap}  alt="Exemplo de Mapa" />
        </div>
          <h1 id="block_two_title">Satélites disponíveis</h1>
          <p id="block_two_paragraph">
            Disponibilizamos uma série de satélites para que você 
            <br/>selecione de acordo com sua necessidade no momento. 
            <br/>Veja abaixo as opções:
          </p>
        <div id='div_satellites'>
          <button className="satellite_button">Landsat 8</button>
          <button className="satellite_button">Sentinel 1 e 2</button>
          <button className="satellite_button">CBERS 4</button>
          <button className="satellite_button">CBERS 4A</button>
          <button className="satellite_button">Amazônia 1</button>
        </div>
      </div>

      <div id="block_three">
          <h1 id="block_three_title">Download de imagens <br/>selecionadas</h1>
          <p id="block_three_paragraph">
            Selecionando a área de interesse, ainda é possível fazer o 
            <br/>download da imagem da região de duas formas: como 
            <br/><span>imagem bruta</span> ou como <span>imagem processada</span>. Basta clicar 
            <br/>no ícone da área de interesse, escolher uma das opções e 
            <br/>fazer o download.
          </p>
        <div id="r_side_map">
          <img id="r_map" src={rmap} alt="Exemplo de Mapa" />
        </div>
      </div>


      <div className="footer">
        <div id="div_footer_logo">
          <img id="footer_logo" src={logo} alt="Logo" />
        </div>
        <div id='footer_title'>
          <h1>Polaris</h1>
        </div>
        <div id='div_footer_content'>
          <p>Sobre o projeto</p>
          <p>Acessar o mapa</p>
          <p id='div_github'>
            <img id="github_logo" src={github} alt="Github" />
            Confira o GitHub do projeto
          </p>
        </div>
        <div>
          <p id='div_footer_rights'>2021 © TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </div>
) }
