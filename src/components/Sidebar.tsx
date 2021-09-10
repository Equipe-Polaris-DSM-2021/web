import React, {useState} from	 'react';
import { useHistory } from 'react-router-dom';
import { MdClear } from "react-icons/md";

import '../styles/components/sidebar.css';
import Button from './Button';
import Logo from './Logo';

export default function Sidebar() {
  const { goBack } = useHistory(); 

  const [landsatChecked, setLandsatChecked] = useState(false);
  const [sentinelOneChecked, setSentinelOneChecked] = useState(false);
  const [sentinelTwoChecked, setSentinelTwoChecked] = useState(false);
  const [cbers4Checked, setCbers4Checked] = useState(false);
  const [cbers4AChecked, setCbers4AChecked] = useState(false);
  const [amazoniaOneChecked, setAmazoniaOneChecked] = useState(false);

  const [initialPeriodDate, setInitialPeriodDate] = useState('');
  const [endPeriodDate, setEndPeriodDate] = useState('');

  const [cloudRange, setCloudRange] = useState('');

  const handleFilter = () => {
    const satelliteOptions = {
      'landsat 8': landsatChecked,
      'sentinel 1': sentinelOneChecked,
      'sentinel 2': sentinelTwoChecked,
      'CBERS 4': cbers4Checked,
      'CBERS 4A': cbers4AChecked,
      'amazônia 1': amazoniaOneChecked,
    }

    const periodFilter = {
      'date-initial': initialPeriodDate,
      'date-final': endPeriodDate
    }

    const cloudFilter = {
      'cloud-range': cloudRange,
    }

    const payload = {
      satelliteOptions,
      periodFilter,
      cloudFilter
    }

    return console.log(payload)
  }

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
              <input type="checkbox" name="landsat-8" id="landsat-8" checked={landsatChecked} onChange={() => {setLandsatChecked(!landsatChecked)}} />
              <label htmlFor="landsat-8">Landsat 8</label>
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="sentinel-1" id="sentinel-1" checked={sentinelOneChecked} onChange={() => {setSentinelOneChecked(!sentinelOneChecked)}} />
              <label htmlFor="sentinel-1">Sentinel 1</label>
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="sentinel-2" id="sentinel-2" checked={sentinelTwoChecked} onChange={() => {setSentinelTwoChecked(!sentinelTwoChecked)}} />
              <label htmlFor="sentinel-2">Sentinel 2</label>
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="CBERS4" id="CBERS4" checked={cbers4Checked} onChange={() => {setCbers4Checked(!cbers4Checked)}} />
              <label htmlFor="CBERS4">CBERS 4</label>              
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="CBERS4A" id="CBERS4A" checked={cbers4AChecked} onChange={() => {setCbers4AChecked(!cbers4AChecked)}} />
              <label htmlFor="CBERS4A">CBERS 4A</label>              
            </div>
            <div className="option-satellite">
              <input type="checkbox" name="amazonia-1" id="amazonia-1" checked={amazoniaOneChecked} onChange={() => {setAmazoniaOneChecked(!amazoniaOneChecked)}} />
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
            <input type="date" onChange={(event) => {setInitialPeriodDate(event.target.value)}} />
            -
            <input type="date" onChange={(event) => {setEndPeriodDate(event.target.value)}} />
          </div>
        </section>
        <section className="cloud-range">
          <h2>Cobertura de nuvens</h2>
          <p>Selecione a porcentagem de nuvens</p>
          <input type="range" className="slider" onChange={(event) => {setCloudRange(event.target.value)}}/>
        </section>
      </main>
      <footer>
        <Button 
          width="100%"
          onClick={handleFilter}
          children = "Buscar"
        />
      </footer>
    </aside>
  );
}