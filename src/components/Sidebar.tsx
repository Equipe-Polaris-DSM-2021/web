import React from	 'react';
import { useHistory } from 'react-router-dom';
import { MdClear } from "react-icons/md";

import '../styles/components/sidebar.css';
import Button from './Button';
import Logo from './Logo';

export default function Sidebar() {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar">
      <header>
        <Logo />        
        <MdClear size="1.4rem" cursor="pointer" onClick={() => {}}/>
      </header>
      <main>
        <section>
          <h2>Satélite</h2>
          <div className="option-satellites-list">
            <div className="option-satellite">
              <input type="checkbox" name="landsat-8" id="landsat-8" />
              <label htmlFor="landsat-8">Landsat 8</label>
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="sentinel-1" id="sentinel-1" />
              <label htmlFor="sentinel-1">Sentinel 1</label>
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="sentinel-2" id="sentinel-2" />
              <label htmlFor="sentinel-2">Sentinel 2</label>
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="CBERS4" id="CBERS4" />
              <label htmlFor="CBERS4">CBERS 4</label>              
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="CBERS4A" id="CBERS4A" />
              <label htmlFor="CBERS4A">CBERS 4A</label>              
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="amazonia-1" id="amazonia-1" />
              <label htmlFor="amazonia-1">Amazônia 1</label>              
            </div>
          </div>          
        </section>
        <section>
          <h2>Área de interesse</h2>
          <div className="area-interest-wrap">
            <p>Selecione a área de interesse no mapa</p>
            <div className="select"></div>
          </div>
        </section>
        <section>
          <h2>Período</h2>
          <div className="period-range">
            <input type="date" />
            -
            <input type="date" />
          </div>
        </section>
        <section className="cloud-range">
          <h2>Cobertura de nuvens</h2>
          <p>Selecione a porcentagem de nuvens</p>
          <input type="range" className="slider" />
        </section>
      </main>
      <footer>
        <Button 
          width="100%"
          onClick={() => goBack}
          children = "Buscar"
        />
      </footer>
    </aside>
  );
}