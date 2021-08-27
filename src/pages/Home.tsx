import {Map, TileLayer } from 'react-leaflet';

import "../styles/pages/home.css"

export default function Home() {
  return (
    <div id="page-map">
      <Map center={[-23.2683,-45.913486]}
        zoom={15} 
        style={{ width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />          
      </Map>
    </div>
  )
}
