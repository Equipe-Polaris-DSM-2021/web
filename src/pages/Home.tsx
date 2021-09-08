import {Map, TileLayer } from 'react-leaflet';

import "../styles/pages/home.css"

export default function Home() {
  return (
    <>
    <div id="simples-imgs">
    <h1>Um jeito simples e rápido de <br/>consumir imagens de satélites</h1>
    <p>Com poucos cliques, acesse imagens de diversos satélites disponíveis, 
      definindo as opções de visualização de acordo com sua preferência.</p>
      <div id="side-map-img">
        <img></img>
      </div>
    </div>
    <div id="satelites-disp">
      <h1>Satélites disponíveis</h1>
      <p>Disponibilizamos uma série de satélites para que você selecione 
        de acordo com sua necessidade no momento. Veja abaixo as opções:</p>
        <div>
        Landsat 8
        Sentinel 1 e 2
        CBERS 4
        CBERS 4A
        Amazônia 1
      </div>
    </div>
    <div id="Download-imgs">
      <h1>Download de imagens selecionadas</h1>
      <p>Selecionando a área de interesse, ainda é possível fazer o download 
        da imagem da região de duas formas: como imagem bruta ou como imagem processada. 
        Basta clicar no ícone da área de interesse, escolher uma das opções e fazer o download.</p>


    </div>
    </>
  )
}
