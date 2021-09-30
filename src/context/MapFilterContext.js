import React, { createContext } from "react";

import useFilter from "./hooks/useMapFilter";

const Context = createContext();

function MapFilterProvider({ children }) {
  const {
    performFilteredSearch,
    showTileList,
    setShowTileList,
    tilesDynamicList,
    // dataFeaturesColections,
  } = useFilter();

  return (
    <Context.Provider
      value={{
        performFilteredSearch,
        showTileList,
        setShowTileList,
        tilesDynamicList,
        // dataFeaturesColections,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, MapFilterProvider };
