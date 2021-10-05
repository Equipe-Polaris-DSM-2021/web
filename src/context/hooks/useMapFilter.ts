import { useState } from "react";
import FeaturesColections from "../../services/featuresColections.js";
// import api from "../../services/api";

// Tipagem da Lista de Features
interface TilesDynamicList {
  id: string;
  bbox: number[];
  assets: { thumbnail: { href: string } };
}

export default function useFilter() {
  // Lista de Features do JSON
  const [tilesDynamicList, setTilesDynamicList] =
    useState<TilesDynamicList[]>();

  // Habilitar/Desabilitar Menu de Resultados
  const [showTileList, setShowTileList] = useState<boolean>(false);

  // Valores da ImageOverlay
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageOpacity, setImageOpacity] = useState<number>(0);
  const [imageBounds, setImageBounds] = useState<[number, number][]>([
    [-76.26368, 122.99418],
    [-73.1584, 134.71451],
  ]);

  const performFilteredSearch = async (form: {}) => {
    setShowTileList(false);
    setTilesDynamicList(FeaturesColections.features as TilesDynamicList[]);

    setTimeout(() => {
      setShowTileList(true);
    }, 1000);
  };

  return {
    performFilteredSearch,
    tilesDynamicList,
    showTileList,
    setShowTileList,
    setImageUrl,
    imageUrl,
    setImageBounds,
    imageBounds,
    imageOpacity,
    setImageOpacity,
  };

  // dados e funções que são utilizados em
  // outros componentes e paginas por exemplo
}
