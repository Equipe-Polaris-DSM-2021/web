import { Component } from "react";
import { MdClear } from "react-icons/md";
import Button from "./Button";
import { Context } from "../context/MapFilterContext";
import "../styles/components/modalDownload.css";

export default class ModalDownload extends Component {
  handleCloseModal() {
    this.setState({ ...this.state, toggleModal: !this.context.toggleModal });
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay?.classList.toggle("active");
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
                  />
                  <label htmlFor="img-processada">Imagem Processada</label>
                  <section className="option-description">
                    Imagem com cores naturais e realçadas no formato GeoTIFF
                  </section>
                </div>

                {/* IMAGEM BRUTA */}
                <div className="option-download">
                  <input type="checkbox" name="img-bruta" id="img-bruta" />
                  <label htmlFor="img-bruta">Imagem Bruta</label>
                  <section className="option-description">
                    Todas as bandas da imagem compactadas
                  </section>
                </div>
              </div>
              <Button type="submit" width="40%" children={"Baixar"} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
