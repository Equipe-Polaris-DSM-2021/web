import { useContext, useState } from "react";
import "../styles/components/ResultsMenu.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { Context } from "../context/MapFilterContext";

interface InterfaceFeature {
  id: string;
}

function ResultsMenu() {
  const {
    tilesDynamicList,
    showTileList,
    setShowTileList,
    // dataFeaturesColections,
    setImageUrl,
    setImageBounds,
  } = useContext(Context);

  // Controle para verificar se o menu está aberto ou fechado
  const handleResultsMenu = () => {
    setShowTileList(!showTileList);
  };

  const handleImageOverlay = (url: string, bbox: number[]) => {
    const organizedBbox = [
      [bbox[1], bbox[0]],
      [bbox[3], bbox[2]],
    ];
    setImageUrl(url);
    setImageBounds(organizedBbox);
  };

  return (
    <div id="results-menu" hidden={!showTileList}>
      {/* Conteúdo do componente */}
      <div id="contents">
        <header>
          <h1>Resultados</h1>
          <MdKeyboardBackspace
            className="buttonMD"
            size="1.4rem"
            cursor="pointer"
            onClick={handleResultsMenu}
          />
        </header>

        {/* Resultados da busca */}
        <div id="results">
          {tilesDynamicList.map((feature: any, index: number) => (
            <div className="satelite-image-list" key={index}>
              {feature.id}
              <div className="buttons">
                <button
                  onClick={() =>
                    handleImageOverlay(
                      feature.assets.thumbnail.href as string,
                      feature.bbox as number[]
                    )
                  }
                >
                  Vizualizar
                </button>
                <button>Baixar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultsMenu;
