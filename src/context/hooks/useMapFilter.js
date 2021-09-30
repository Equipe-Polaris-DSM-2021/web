import React, { useState } from "react";
import FeaturesColections from "../../services/featuresColections.js";
import api from "../../services/api";

export default function useFilter() {
  const [tilesDynamicList, setTilesDynamicList] = useState([]);
  const [showTileList, setShowTileList] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageBounds, setImageBounds] = useState([
    [-76.26368, 122.99418],
    [-73.1584, 134.71451],
  ]);
  //const [dataFeaturesColections, setDataFeaturesColections] = useState();

  const performFilteredSearch = async (form) => {
    setShowTileList(false);
    //setDataFeaturesColections(FeaturesColections);
    setTilesDynamicList(FeaturesColections.features);

    setTimeout(() => {
      setShowTileList(true);
    }, 1000);
  };

  return {
    performFilteredSearch,
    tilesDynamicList,
    showTileList,
    setShowTileList,
    //dataFeaturesColections,
    setImageUrl,
    imageUrl,
    setImageBounds,
    imageBounds,
  };

  // dados e funções que são utilizados em
  // outros componentes e paginas por exemplo
}
