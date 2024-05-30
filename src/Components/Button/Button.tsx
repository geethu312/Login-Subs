import React from "react";
import "./Button.scss";

interface ButtonProps {
  name: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ name, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="button" style={buttonStyle}>
      {name}
    </button>
  );
};

export default Button;
