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
      <div className='Header'>
        <div id="hlg">
          <img id="logo" src={logo} alt="Logo" />
        </div>
        <h1 id='htt'>Polaris</h1>
        <div id='bty'>
          <a href="map.tsx"><button id="bt_yellow">Acessar o mapa</button></a>
        </div>
      </div>

      <div id='b1'>
          <h1 id="ts1">Um jeito simples e rápido de <br/>consumir imagens de satélites</h1>
          <p id="ps1">
            Com poucos cliques, acesse imagens de diversos satélites 
            <br/>disponíveis, definindo as opções de visualização de acordo 
            <br/>com sua preferência.
          </p>
          <div id='bs1'>
            <img id="btmm" src={btmm}  alt="Exemplo de Mapa" />
            <img id="btms" src={btms}  alt="Exemplo de Mapa" />
          </div>
        <div id="big_r_side_map">
          <img id="big_r_map" src={bigrmap}  alt="Exemplo de Mapa" />
        </div>
      </div>

      <div id='b2'>
        <div id="l_side_map">
          <img id="l_map" src={lmap}  alt="Exemplo de Mapa" />
        </div>
          <h1 id="ts2">Satélites disponíveis</h1>
          <p id="ps2">
            Disponibilizamos uma série de satélites para que você 
            <br/>selecione de acordo com sua necessidade no momento. 
            <br/>Veja abaixo as opções:
          </p>
        <div id='sats'>
          <button className="bt_whyl">Landsat 8</button>
          <button className="bt_whyl">Sentinel 1 e 2</button>
          <button className="bt_whyl">CBERS 4</button>
          <button className="bt_whyl">CBERS 4A</button>
          <button className="bt_whyl">Amazônia 1</button>
        </div>
      </div>

      <div id="b3">
          <h1 id="ts3">Download de imagens <br/>selecionadas</h1>
          <p id="ps3">
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


      <div className="Footer">
        <div id="dicon">
          <img id="flogo" src={logo} alt="Logo" />
        </div>
        <div id='ftt'>
          <h1>Polaris</h1>
        </div>
        <div id='fct'>
          <p>Sobre o projeto</p>
          <p>Acessar o mapa</p>
          <p id='dgh'>
            <img id="github" src={github} alt="Github" />
            Confira o GitHub do projeto
          </p>
        </div>
        <div id='fdr'>
          <p>2021 © TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </div>
) }
