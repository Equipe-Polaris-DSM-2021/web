import { Component } from "react";
import { MdClear } from "react-icons/md";
import Button from "./Button";
import { Context } from "../context/MapFilterContext";
import "../styles/components/modalDownload.css";

export default class ModalDownload extends Component {
  state = {
    processedImageChecked: false,
    rawImageChecked: false,
  };

  handleCloseModal() {
    this.setState({ ...this.state, toggleModal: !this.context.toggleModal });
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay?.classList.toggle("active");
  }

  downloadImage() {
    const { processedImageChecked, rawImageChecked } = this.state;

    // Se a opção de download da imagem processada estiver marcada
    if (processedImageChecked) {
      console.log("Imagem processada: " + this.state.processedImageChecked);

      // imprimindo o que precisa ser baixado, que está sendo passado para o contexto no ResultsMenu
      console.log(this.context.processedImage);
    }

    // Se a opção de download da imagem bruta estiver marcada
    if (rawImageChecked) {
      console.log("Imagem bruta: " + this.state.rawImageChecked);

      // imprimindo o que precisa ser baixado, que está sendo passado para o contexto no ResultsMenu
      console.log(this.context.rawImage);
    }
  }

  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <h1>Download de imagens</h1>
            <MdClear
              id="modal-header-btn"
              size="1.5rem"
              cursor="pointer"
              onClick={this.handleCloseModal.bind(this)}
            />
          </div>
          <div className="modal-body">
            <p>
              Para o download, é possível escolher entre os seguintes formatos:
            </p>
            <form>
              <div className="modal-options-list">
                {/* IMAGEM PROCESSADA */}
                <div className="option-download">
                  <input
                    type="checkbox"
                    name="img-processada"
                    id="img-processada"
                    onChange={() => {
                      this.setState({
                        ...this.state,
                        processedImageChecked:
                          !this.state.processedImageChecked,
                      });
                    }}
                  />
                  <label htmlFor="img-processada">Imagem Processada</label>
                  <section className="option-description">
                    Imagem com cores naturais e realçadas no formato GeoTIFF
                  </section>
                </div>

                {/* IMAGEM BRUTA */}
                <div className="option-download">
                  <input
                    type="checkbox"
                    name="img-bruta"
                    id="img-bruta"
                    onChange={() => {
                      this.setState({
                        ...this.state,
                        rawImageChecked: !this.state.rawImageChecked,
                      });
                    }}
                  />
                  <label htmlFor="img-bruta">Imagem Bruta</label>
                  <section className="option-description">
                    Todas as bandas da imagem compactadas
                  </section>
                </div>
              </div>
              <Button
                width="40%"
                children={"Baixar"}
                onClick={this.downloadImage.bind(this)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
ModalDownload.contextType = Context;
