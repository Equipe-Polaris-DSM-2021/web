import { useState } from "react";
import "../styles/components/ResultsMenu.css";
import btnVoltar from "../assets/img/Icons/btn-voltar.svg";

function ResultsMenu() {
  // Controle para verificar se o menu está aberto ou fechado
  const [showResultsMenu, setShowResultsMenu] = useState(false);
  const handleResultsMenuClose = () => {
    setShowResultsMenu(false);
  };
  const handleResultsMenuOpen = () => {
    setShowResultsMenu(true);
  };

  return (
    <div id="results-menu" hidden={!showResultsMenu}>
      {/* Conteúdo do componente */}
      <div id="contents">
        <header>
          <h1>Resultados</h1>
          <button>
            <img
              src={btnVoltar}
              alt="Voltar"
              onClick={handleResultsMenuClose}
            />
          </button>
        </header>

        <div id="results">
          {/* Resultados da busca */}
          <div className="image">
            Nome da imagem
            <div className="buttons">
              <button>Vizualizar</button>
              <button>Baixar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsMenu;
