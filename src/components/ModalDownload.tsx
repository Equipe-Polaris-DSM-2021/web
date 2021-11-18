import { Component } from "react";
import Select from "react-select";
import { MdClear } from "react-icons/md";
import Button from "./Button";
import { Context } from "../context/MapFilterContext";
import "../styles/components/modalDownload.css";

import downloadService from "../services/download";

export default class ModalDownload extends Component {
  state = {
    valueSelect: "default",
  };

  handleCloseModal() {
    this.setState({ ...this.state, toggleModal: !this.context.toggleModal });
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay?.classList.toggle("active");
  }

  downloadImage() {
    if (this.state.valueSelect == "default" || this.state.valueSelect == "") {
      alert("Selecione uma banda");
    } else {
      downloadService.downloadBandAndSave(this.state.valueSelect);
    }
    // this.context.bands.forEach((url) =>
    //   downloadService.downloadBandAndSave(url)
    // );
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
            {this.context.sateliteName == "sentinel-2-l1c" ? (
              <p>
                <span id="alert-sentinel">Atenção:</span> Não é possível baixar
                as bandas da imagem do satélite {this.context.sateliteName} pois
                não há permissão para acessar o repositório.
              </p>
            ) : (
              <p>Escolha qual banda da imagem você deseja baixar:</p>
            )}

            <div id="container-download">
              <select
                value={this.state.valueSelect}
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    valueSelect: event.target.value,
                  });
                }}
              >
                <option value="default">Selecione uma banda</option>
                {this.context.bands.map((band) => (
                  <option value={band[0]}>{band[1]}</option>
                ))}
              </select>

              <button
                onClick={this.downloadImage.bind(this)}
                disabled={this.context.sateliteName == "sentinel-2-l1c"}
              >
                Baixar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ModalDownload.contextType = Context;
