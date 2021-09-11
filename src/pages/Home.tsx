import {MapContainer, TileLayer } from 'react-leaflet';

import Sidebar from '../components/Sidebar';
import ResultsMenu from "../components/ResultsMenu";

import "../styles/pages/home.css";

export default function Home() {
  
  return (
    <div id="page-map">
      <Sidebar />
     {/* Resultados da Busca*/}
     {/* <ResultsMenu /> */}
      <MapContainer center={[-23.2683,-45.913486]}
        zoom={15} 
        style={{ width: '100%', height: '100%'}}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />          
      </MapContainer>
    </div>
  );
}
