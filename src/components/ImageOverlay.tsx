import { LatLngBounds } from "leaflet";
import { useContext, useEffect, useState } from "react";

import { ImageOverlay } from "react-leaflet";

import { Context } from "../context/MapFilterContext";

export const LeafletImageOverlay = () => {
  const { imageUrl, imageBounds, imageOpacity, setImageLayerUpdating } =
    useContext(Context);

  const [imageLayerUpdated, setImageLayerUpdated] = useState(false);
  const [bounds, setBounds] = useState<any>();
  const [url, setUrl] = useState<string>("");
  const [opacity, setOpacity] = useState<number>();

  useEffect(() => {
    if (imageUrl !== url) {
      const newBounds = new LatLngBounds(imageBounds);

      setTimeout(() => {
        setBounds(newBounds);
        setUrl(imageUrl);
        setOpacity(imageOpacity);
        setImageLayerUpdated(true);

        setImageLayerUpdating(false);
      }, 2000);
    }

    return () => {
      setImageLayerUpdated(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageBounds, imageUrl, imageOpacity]);

  return (
    <>
      {imageLayerUpdated ? (
        <ImageOverlay bounds={bounds} url={url} opacity={opacity} />
      ) : null}
    </>
  );
};
