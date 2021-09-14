import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

import Sidebar from "../components/Sidebar";
import ResultsMenu from "../components/ResultsMenu";

import "../styles/pages/home.css";

export default function Home() {
  const [pageLoaded, setPageloaded] = useState(false);

  useEffect(() => {
    setPageloaded(true);
    return;
  }, []);

  function MyComponent() {
    const map = useMapEvents({
      // baselayerchange: (event) => {
      //   console.log(event);
      // },
      // overlayadd : (event) => {console.log(event)},
      // overlayremove : (event) => {console.log(event)},

      // layeradd : (event) => {console.log(event)},
      // layerremove : (event) => {console.log(event)},

      // zoomlevelschange : (event) => {console.log(event)},
      unload: (event) => {
        console.log(event);
      },
      // viewreset : (event) => {console.log(event)},
      // load : (event) => {console.log(event)},
      // zoomstart : (event) => {console.log(event)},
      // movestart : (event) => {console.log(event)},
      // zoom : (event) => {console.log(event)},
      // move : (event) => {console.log(event)},
      // zoomend : (event) => {console.log(event)},
      moveend: (event) => {
        const teste = map.getBounds();
        console.log(teste);
      },
      // autopanstart : (event) => {console.log(event)},
      // dragstart : (event) => {console.log(event)},
      // drag : (event) => {console.log(event)},
      // add : (event) => {console.log(event)},
      // remove : (event) => {console.log(event)},
      // loading : (event) => {console.log(event)},
      // error : (event) => {console.log(event)},
      // update : (event) => {console.log(event)},
      // down : (event) => {console.log(event)},
      // predrag : (event) => {console.log(event)},

      // resize : (event) => {console.log(event)},

      // popupopen : (event) => {console.log(event)},
      // popupclose : (event) => {console.log(event)},

      // tooltipopen : (event) => {console.log(event)},
      // tooltipclose : (event) => {console.log(event)},

      // locationerror : (event) => {console.log(event)},

      // locationfound : (event) => {console.log(event)},

      // click : (event) => {console.log(event)},
      // dblclick : (event) => {console.log(event)},
      // mousedown : (event) => {console.log(event)},
      // mouseup : (event) => {console.log(event)},
      // mouseover : (event) => {console.log(event)},
      // mouseout : (event) => {console.log(event)},
      // mousemove : (event) => {console.log(event)},
      // contextmenu : (event) => {console.log(event)},
      // preclick : (event) => {console.log(event)},

      // keypress : (event) => {console.log(event)},
      // keydown : (event) => {console.log(event)},
      // keyup : (event) => {console.log(event)},

      // zoomanim : (event) => {console.log(event)},

      // dragend : (event) => {console.log(event)},

      // tileunload : (event) => {console.log(event)},
      // tileloadstart : (event) => {console.log(event)},
      // tileload : (event) => {console.log(event)},

      // tileerror : (event) => {console.log(event)},
    });
    return null;
  }

  return (
    <div id="page-map">
      {pageLoaded ? <Sidebar /> : null}
      {/* <ResultsMenu /> */}
      <div className="map-container">
        <MapContainer
          center={[-23.2683, -45.913486]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <MyComponent />
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
}
