import React from "react";

import { CircularProgress } from "@material-ui/core";

import { Context } from "../context/MapFilterContext";

import "../styles/components/loading-container.css";

export const Loading = () => {
  const { imageOverlayUpdating } = React.useContext(Context);

  React.useEffect(() => {
    console.log(imageOverlayUpdating);
  }, [imageOverlayUpdating]);

  return (
    <>
      {imageOverlayUpdating ? (
        <div className="loading-container">
          <div className="loading">
            <CircularProgress size="1.1rem" style={{ color: "#44AAFF" }} />
          </div>
        </div>
      ) : null}
    </>
  );
};
