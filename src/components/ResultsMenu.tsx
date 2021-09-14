import { useContext } from "react";
import "../styles/components/ResultsMenu.css";
import btnVoltar from "../assets/img/Icons/btn-voltar.svg";

import { Context } from "../context/MapFilterContext";

function ResultsMenu() {
  const {
    tilesDynamicList,

    showTileList,
    setShowTileList,
  } = useContext(Context);


  // Controle para verificar se o menu está aberto ou fechado
  const handleResultsMenu = () => {
    setShowTileList(!showTileList)
  };
  
  return (
    <div id="results-menu" hidden={!showTileList}>
      {/* Conteúdo do componente */}
      <div id="contents">
        <header>
          <h1>Resultados</h1>
          <button>
            <img src={btnVoltar} alt="Voltar" onClick={handleResultsMenu} />
          </button>
        </header>

        <div id="results">
          {tilesDynamicList.map((tile: any, index: number) => (        
            <div className="image" key={index}>
              Nome da imagem {index}
              <div className="buttons">
                <button>Vizualizar</button>
                <button>Baixar</button>
              </div>
            </div>
          ))}
          {/* Resultados da busca */}
        </div>
      </div>
    </div>
  );
}

export default ResultsMenu;
