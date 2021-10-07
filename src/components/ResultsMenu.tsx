import { Component } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

import { Context } from "../context/MapFilterContext";

import "../styles/components/ResultsMenu.css";

interface InterfaceFeature {
  id: string;
  bbox: number[];
  assets: { thumbnail: { href: string } };
  properties: { collection: string };
}

export default class ResultsMenu extends Component {
  // Controle para verificar se o menu está aberto ou fechado
  handleResultsMenu() {
    this.context.setShowTileList(this.context.showTileList);
  }

  handleImageOverlay(url: string, bbox: number[], opacity: number) {
    const organizedBbox = [
      [bbox[1], bbox[0]],
      [bbox[3], bbox[2]],
    ];

    this.context.handleImageOverlay(url, organizedBbox, opacity);
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
            {this.context.tilesDynamicList.map(
              (feature: InterfaceFeature, index: number) => (
                <div className="satelite-image-list" key={index}>
                  <p>
                    {feature.properties.collection}: {feature.id}
                  </p>
                  <div className="buttons">
                    <button
                      onClick={() =>
                        this.handleImageOverlay(
                          feature.assets.thumbnail.href as string,
                          feature.bbox as number[],
                          1 as number
                        )
                      }
                    >
                      Vizualizar
                    </button>
                    <button>Baixar</button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
ResultsMenu.contextType = Context;
