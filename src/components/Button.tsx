import React from "react";

import "../styles/components/button.css";

interface Props {
  backgroundColor?: string;
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  radius?: string;
  width?: string;
}

const Button: React.FC<Props> = ({
  border = "none",
  backgroundColor = "#FFBB55",
  color = "#FFFFFF",
  children,
  height = "42px",
  onClick,
  radius = "0.5rem",
  width = "17rem",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      className="button-primary"
    >
      {children}
    </button>
  );
};

export default Button;
