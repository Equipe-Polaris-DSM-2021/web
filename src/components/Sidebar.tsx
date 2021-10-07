import { Component } from "react";

import { MdClear, MdDehaze } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";
import { CircularProgress } from "@material-ui/core"; // Bolinha de carregamento

import Button from "./Button";
import Logo from "./Logo";

import { Context } from "../context/MapFilterContext";

import "../styles/components/sidebar.css";
import "../styles/components/slider.css";

export default class Sidebar extends Component {
  state = {
    toggleFilter: false,
    landsatChecked: false,
    sentinelOneChecked: false,
    sentinelTwoChecked: false,
    cbers4Checked: false,
    cbers4AChecked: false,
    amazoniaOneChecked: false,
    initialPeriodDate: "",
    endPeriodDate: "",
    cloudRange: "50",
    // Para controlar quando ativar a bolinha de carregamento
    inSearch: false,
  };

  handleFilter(event: any) {
    event.preventDefault();

    const {
      landsatChecked,
      sentinelOneChecked,
      sentinelTwoChecked,
      cbers4Checked,
      cbers4AChecked,
      amazoniaOneChecked,

      initialPeriodDate,
      endPeriodDate,
      cloudRange,
    } = this.state;

    if (
      !landsatChecked &&
      !sentinelOneChecked &&
      !sentinelTwoChecked &&
      !cbers4Checked &&
      !cbers4AChecked &&
      !amazoniaOneChecked
    )
      return alert("Escolha um satélite");

    const satelliteOptions = {
      "landsat 8": landsatChecked,
      "sentinel 1": sentinelOneChecked,
      "sentinel 2": sentinelTwoChecked,
      "CBERS 4": cbers4Checked,
      "CBERS 4A": cbers4AChecked,
      "amazônia 1": amazoniaOneChecked,
    };

    const dateInitial = new Date(initialPeriodDate);
    const dateFinal = new Date(endPeriodDate);

    const periodFilter = {
      "date-initial": dateInitial.toISOString(),
      "date-final": dateFinal.toISOString(),
    };

    const cloudFilter = {
      "cloud-range": cloudRange,
    };

    const payload = {
      satelliteOptions,
      periodFilter,
      cloudFilter,
    };

    this.context.performFilteredSearch(payload);

    this.setState({
      ...this.state,
      inSearch: !this.state.inSearch,
    }); // ativa a bolinha de carregamento quando o botão for clicado
  }

  handleCloseFilter() {
    this.setState({ ...this.state, toggleFilter: !this.state.toggleFilter });
    const asideFilter = document.querySelector("aside");
    asideFilter?.classList.toggle("hidden");
  }

  render() {
    return (
      <aside className="app-sidebar">
        <header>
          <Logo />
          {!this.state.toggleFilter ? (
            <MdClear
              className="buttonMD"
              size="1.4rem"
              cursor="pointer"
              onClick={this.handleCloseFilter.bind(this)}
            />
          ) : (
            <MdDehaze
              className="buttonMD"
              size="1.4rem"
              cursor="pointer"
              onClick={this.handleCloseFilter.bind(this)}
            />
          )}
        </header>
        <form onSubmit={this.handleFilter.bind(this)}>
          <section>
            <h2>Satélite</h2>
            <div className="option-satellites-list">
              <div className="option-satellite">
                <input
                  type="checkbox"
                  name="landsat-8"
                  id="landsat-8"
                  checked={this.state.landsatChecked}
                  onChange={() => {
                    this.setState({
                      ...this.state,
                      landsatChecked: !this.state.landsatChecked,
                    });
                  }}
                />
                <label htmlFor="landsat-8">Landsat 8</label>
              </div>
              <div className="option-satellite">
                <input
                  type="checkbox"
                  name="sentinel-1"
                  id="sentinel-1"
                  checked={this.state.sentinelOneChecked}
                  onChange={() => {
                    this.setState({
                      ...this.state,
                      sentinelOneChecked: !this.state.sentinelOneChecked,
                    });
                  }}
                />
                <label htmlFor="sentinel-1">Sentinel 1</label>
              </div>
              <div className="option-satellite">
                <input
                  type="checkbox"
                  name="sentinel-2"
                  id="sentinel-2"
                  checked={this.state.sentinelTwoChecked}
                  onChange={() => {
                    this.setState({
                      ...this.state,
                      sentinelTwoChecked: !this.state.sentinelTwoChecked,
                    });
                  }}
                />
                <label htmlFor="sentinel-2">Sentinel 2</label>
              </div>
              <div className="option-satellite">
                <input
                  type="checkbox"
                  name="CBERS4"
                  id="CBERS4"
                  checked={this.state.cbers4Checked}
                  onChange={() => {
                    this.setState({
                      ...this.state,
                      cbers4Checked: !this.state.cbers4Checked,
                    });
                  }}
                />
                <label htmlFor="CBERS4">CBERS 4</label>
              </div>
              <div className="option-satellite">
                <input
                  type="checkbox"
                  name="CBERS4A"
                  id="CBERS4A"
                  checked={this.state.cbers4AChecked}
                  onChange={() => {
                    this.setState({
                      ...this.state,
                      cbers4AChecked: !this.state.cbers4AChecked,
                    });
                  }}
                />
                <label htmlFor="CBERS4A">CBERS 4A</label>
              </div>
              <div className="option-satellite">
                <input
                  type="checkbox"
                  name="amazonia-1"
                  id="amazonia-1"
                  checked={this.state.amazoniaOneChecked}
                  onChange={() => {
                    this.setState({
                      ...this.state,
                      amazoniaOneChecked: !this.state.amazoniaOneChecked,
                    });
                  }}
                />
                <label htmlFor="amazonia-1">Amazônia 1</label>
              </div>
            </div>
          </section>
          <section>
            <h2>Área de interesse</h2>
            <div className="area-interest-wrap">
              <p>Selecione a área de interesse no mapa</p>
              <div
                className="button-select"
                onClick={() => {
                  const button: any = document.querySelector(
                    ".leaflet-draw-draw-rectangle"
                  );

                  button.click();
                }}
              >
                <FaMousePointer size="1.3rem" className="icon-select" />
              </div>
            </div>
          </section>
          <section>
            <h2>Período</h2>
            <div className="period-range">
              <input
                type="date"
                min="2021-01-01"
                max="2021-07-10"
                value={this.state.initialPeriodDate}
                required
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    initialPeriodDate: event.target.value,
                  });
                }}
              />
              -
              <input
                type="date"
                min="2021-01-01"
                max="2021-07-10"
                value={this.state.endPeriodDate}
                required
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    endPeriodDate: event.target.value,
                  });
                }}
              />
            </div>
          </section>
          <section className="cloud-range">
            <h2>Cobertura de nuvens</h2>
            <p>Selecione a porcentagem de nuvens</p>
            <input
              type="range"
              step="10"
              className="slider"
              onChange={(event) => {
                this.setState({
                  ...this.state,
                  cloudRange: event.target.value,
                });
              }}
            />
            <p className="percent-cloud-range">{this.state.cloudRange} &#37;</p>
          </section>
          <Button
            type="submit"
            width="100%"
            children={
              !this.state.inSearch ? (
                // Se não for feita a pesquisa...
                "Buscar"
              ) : (
                // Quando a pesquisa for feita...
                <CircularProgress size="1.1rem" style={{ color: "#44AAFF" }} />
              )
            }
          />
        </form>
      </aside>
    );
  }
}
Sidebar.contextType = Context;
