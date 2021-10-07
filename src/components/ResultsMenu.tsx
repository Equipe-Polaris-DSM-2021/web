import { Component } from "react";
import { Context } from "../context/MapFilterContext";

import { MdKeyboardBackspace } from "react-icons/md";

import "../styles/components/ResultsMenu.css";

export default class ResultsMenu extends Component {
  // Controle para verificar se o menu está aberto ou fechado
  handleResultsMenu() {
    this.context.setShowTileList(this.context.showTileList);
  }

  render() {
    return (
      <div id="results-menu" hidden={!this.context.showTileList}>
        {/* Conteúdo do componente */}
        <div id="contents">
          <header>
            <h1>Resultados</h1>
            <MdKeyboardBackspace
              className="buttonMD"
              size="1.4rem"
              cursor="pointer"
              onClick={this.handleResultsMenu.bind(this)}
            />
          </header>

          {/* Resultados da busca */}
          <div id="results">
            {this.context.tilesDynamicList.map((tile: any, index: number) => (
              <div className="satelite-image-list" key={index}>
                Nome da imagem {index}
                <div className="buttons">
                  <button>Vizualizar</button>
                  <button>Baixar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
ResultsMenu.contextType = Context;
