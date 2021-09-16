import { useContext } from "react";
import "../styles/components/ResultsMenu.css";
import { MdKeyboardBackspace } from "react-icons/md";

import { Context } from "../context/MapFilterContext";

function ResultsMenu() {
  const {
    tilesDynamicList,

    showTileList,
    setShowTileList,
  } = useContext(Context);

  // Controle para verificar se o menu está aberto ou fechado
  const handleResultsMenu = () => {
    setShowTileList(!showTileList);
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
          {tilesDynamicList.map((tile: any, index: number) => (
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

export default ResultsMenu;
