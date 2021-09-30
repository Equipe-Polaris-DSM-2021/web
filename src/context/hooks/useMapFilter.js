import React, { useState } from "react";
// import FeaturesColections from "../../services/featuresColections.js";
import api from "../../services/api";

export default function useFilter() {
  const [tilesDynamicList, setTilesDynamicList] = useState([]);
  const [showTileList, setShowTileList] = useState(false);
  // const [dataFeaturesColections, setDataFeaturesColections] = useState();

  const performFilteredSearch = async (form) => {
    setShowTileList(false);

    /* async function loadDataFeaturesColections() {
        const response = await fetch();
        const data = await response.json();
        setDataFeaturesColections(data);
    } */

    setTilesDynamicList([1, 2, 3, 4, 5]);

    setTimeout(() => {
      setShowTileList(true);
    }, 1000);
  };

  return {
    performFilteredSearch,
    tilesDynamicList,
    showTileList,
    setShowTileList,
    // setDataFeaturesColections,
  };
  // dados e funções que são utilizados em
  // outros componentes e paginas por exemplo
  // a pagina de abstenção
}
