import { useState } from "react";

import api from "../../services/api";

export default function useFilter() {
  const [tilesDynamicList, setTilesDynamicList] = useState([]);
  const [showTileList, setShowTileList] = useState(false);
  const [boundingBox, setBoundingBox] = useState([]);

  const performFilteredSearch = async (form) => {
    setShowTileList(false);

    setTilesDynamicList([1, 2, 4, 5]);

    if (boundingBox.length === 0)
      return console.log("Nenhuma área selecionada");

    const bbox = [
      boundingBox[0].lat.toString(),
      boundingBox[0].lng.toString(),
      boundingBox[1].lat.toString(),
      boundingBox[1].lng.toString(),
    ];

    const inputBody = {
      bbox,
      time: `${form.periodFilter["date-initial"]}/${form.periodFilter["date-final"]}`,
      cloudCover: form.cloudFilter["cloud-range"],
      satelliteOptions: form.satelliteOptions,
    };

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/geo+json",
      };
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setShowTileList(true);
    }, 1000);
  };

  return {
    performFilteredSearch,
    tilesDynamicList,
    showTileList,
    setShowTileList,
    setBoundingBox,
  };
  // dados e funções que são utilizados em
  // outros componentes e paginas por exemplo
  // a pagina de abstenção
}
