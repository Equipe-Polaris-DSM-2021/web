import React from "react";

import "../styles/components/button.css";

interface Props {
  backgroundColor?: string;
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  type?: any;
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
  type = "button",
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
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
