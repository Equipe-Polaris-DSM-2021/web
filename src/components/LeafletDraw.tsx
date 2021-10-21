import { useContext } from "react";

import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import { Context } from "../context/MapFilterContext";

export const LeafletDraw = () => {
  const { setBoundingBox } = useContext(Context);

  function onCreated(e: any) {
    let { _northEast, _southWest } = e.layer._bounds;

    let newBbox = [];

    const getNorthEast = _northEast;
    const getSouthWest = _southWest;

    if (getSouthWest.lat < getNorthEast.lat) {
      newBbox.push(getSouthWest, getNorthEast);
    } else {
      newBbox.push(getNorthEast, getSouthWest);
    }

    setBoundingBox(newBbox);
  }

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={(e) => onCreated(e)}
        draw={{
          rectangle: true,
          polyline: false,
          polygon: false,
          circle: false,
          marker: false,
          circlemarker: false,
        }}
      />
    </FeatureGroup>
  );
};
