import React from "react";
import "./ButtonSubs.scss";

interface ButtonSubsProps {
  name: string;
  className: string;
  onclick: () => void;
}

const ButtonSubs: React.FC<ButtonSubsProps> = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.onclick}>
        {props.name}
      </button>
    </div>
  );
};

export default ButtonSubs;
