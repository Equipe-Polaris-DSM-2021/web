import { Component } from "react";
import { MdKeyboardBackspace, MdCloudQueue } from "react-icons/md";

import { Context } from "../context/MapFilterContext";

import "../styles/components/ResultsMenu.css";

// interface InterfaceFeature {
//   id: string;
//   bbox: number[];
//   assets: { thumbnail: { href: string } };
//   properties: { collection: string };
// }

export default class ResultsMenu extends Component {
  // Controle para verificar se o menu está aberto ou fechado
  handleResultsMenu() {
    this.context.setShowTileList(this.context.showTileList);
  }

  handleShowModal(bands) {
    // Ativa o modal
    this.setState({ ...this.state, toggleModal: this.context.toggleModal });
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay?.classList.toggle("active");

    // Passa os arquivos que podem ser baixados
    this.context.updateDownloadImages(bands);
  }

  handleImageOverlay(url: string, bbox: number[], opacity: number) {
    const organizedBbox = [
      [bbox[1], bbox[0]],
      [bbox[3], bbox[2]],
    ];

    this.context.setImageLayerUpdating(true);
    this.context.handleImageOverlay(url, organizedBbox, opacity);
  }

  render() {
    const ResultsFilter = () => {
      const keys = Object.keys(this.context.tilesDynamicList);
      const featuresPivot = keys.map((key) => {
        return this.context.tilesDynamicList[key];
      });

      // const handleAccordion = (event: any) => {
      //   const satelliteEl = document.querySelector(`#${event.target.id}`);
      //   satelliteEl.classList.toggle("active");
      //   const panel = satelliteEl.nextElementSibling;
      //   panel.classList.toggle("block");
      // };
      // * MELHORIA - ADICIONAR ACCORDION COMPONENT -> https://getbootstrap.com/docs/5.1/components/accordion/
      return (
        <div className="satellite-list">
          {featuresPivot.map((satellite, index) => (
            <div key={index} className="satellite-result">
              <h5 className="satellite-name">{Object.keys(satellite)}</h5>
              <div className="features-list">
                {Object.values(satellite).map(
                  (featureCollection: any, index) => (
                    <FeaturesResult
                      key={index}
                      features={featureCollection.features}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      );
    };

    const FeaturesResult = ({ features }) => {
      return (
        <>
          {features?.map((feature, index) => (
            <div className="satellite-image-list" key={index}>
              <p className="satellite-header">
                <span title={`${feature.properties.collection}: ${feature.id}`}>
                  {feature.properties.collection}: {feature.id}
                </span>
                <span className="cloud-cover">
                  <MdCloudQueue size={18} color="var(--color-secondary)" />
                  {Number(
                    feature.properties["eo:cloud_cover"]
                  ).toFixed()}&#37;{" "}
                </span>
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
                  Visualizar
                </button>
                <button
                  onClick={() =>
                    this.handleShowModal([
                      [
                        feature.assets?.B1?.href
                          ? feature.assets?.B1?.href
                          : feature.assets?.B01?.href,
                        feature.assets?.B1?.title
                          ? feature.assets?.B1?.title
                          : feature.assets?.B01?.title,
                      ],
                      [
                        feature.assets?.B2?.href
                          ? feature.assets?.B2?.href
                          : feature.assets?.B02?.href,
                        feature.assets?.B2?.title
                          ? feature.assets?.B2?.title
                          : feature.assets?.B02?.title,
                      ],
                      [
                        feature.assets?.B3?.href
                          ? feature.assets?.B3?.href
                          : feature.assets?.B03?.href,
                        feature.assets?.B3?.title
                          ? feature.assets?.B3?.title
                          : feature.assets?.B03?.title,
                      ],
                      [
                        feature.assets?.B4?.href
                          ? feature.assets?.B4?.href
                          : feature.assets?.B04?.href,
                        feature.assets?.B4?.title
                          ? feature.assets?.B4?.title
                          : feature.assets?.B04?.title,
                      ],
                      [
                        feature.assets?.B5?.href
                          ? feature.assets?.B5?.href
                          : feature.assets?.B05?.href,
                        feature.assets?.B5?.title
                          ? feature.assets?.B5?.title
                          : feature.assets?.B05?.title,
                      ],
                      [
                        feature.assets?.B6?.href
                          ? feature.assets?.B6?.href
                          : feature.assets?.B06?.href,
                        feature.assets?.B6?.title
                          ? feature.assets?.B6?.title
                          : feature.assets?.B06?.title,
                      ],
                      [
                        feature.assets?.B7?.href
                          ? feature.assets?.B7?.href
                          : feature.assets?.B07?.href,
                        feature.assets?.B7?.title
                          ? feature.assets?.B7?.title
                          : feature.assets?.B07?.title,
                      ],
                      [
                        feature.assets?.B8?.href
                          ? feature.assets?.B8?.href
                          : feature.assets?.B08?.href,
                        feature.assets?.B8?.title
                          ? feature.assets?.B8?.title
                          : feature.assets?.B08?.title,
                      ],
                      [
                        feature.assets?.B9?.href
                          ? feature.assets?.B9?.href
                          : feature.assets?.B09?.href,
                        feature.assets?.B9?.title
                          ? feature.assets?.B9?.title
                          : feature.assets?.B09?.title,
                      ],
                      [feature.assets?.B10?.href, feature.assets?.B10?.title],
                      [feature.assets?.B11?.href, feature.assets?.B11?.title],
                    ])
                  }
                >
                  Baixar
                </button>
              </div>
            </div>
          ))}
          {!features ? <span>Sem resultado</span> : null}
        </>
      );
    };

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
            <ResultsFilter />
          </div>
        </div>
      </div>
    );
  }
}
ResultsMenu.contextType = Context;
