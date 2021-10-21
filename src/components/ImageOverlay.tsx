import { LatLngBounds } from "leaflet";
import { useContext, useEffect, useState } from "react";

import { ImageOverlay } from "react-leaflet";

import { Context } from "../context/MapFilterContext";

export const LeafletImageOverlay = () => {
  const { imageUrl, imageBounds, imageOpacity } = useContext(Context);

  const [imageLayerUpdated, setImageLayerUpdated] = useState(false);
  const [bounds, setBounds] = useState<any>();

  useEffect(() => {
    if (imageBounds.length > 0) {
      const newBounds = new LatLngBounds(imageBounds);
      setBounds(newBounds);
      setImageLayerUpdated(true);
    }

    return () => {
      setImageLayerUpdated(false);
    };
  }, [imageBounds]);

  return (
    <>
      {imageLayerUpdated ? (
        <ImageOverlay bounds={bounds} url={imageUrl} opacity={imageOpacity} />
      ) : null}
    </>
  );
};
