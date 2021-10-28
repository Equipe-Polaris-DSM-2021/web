import { useContext } from "react";

import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import { Context } from "../context/MapFilterContext";

export const LeafletDraw = () => {
  const { setBoundingBox, setDrawAreaCreated } = useContext(Context);

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
    setDrawAreaCreated(true);
  }

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={(e) => onCreated(e)}
        draw={{
          rectangle: {
            shapeOptions: {
              stroke: true,
              color: "var(--color-secondary)",
              weight: 4,
              // opacity: 0.5,
              fill: false,
              showArea: false,
              clickable: true,
            },
          },
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
