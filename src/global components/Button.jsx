import React from "react";

function Button({ onClick, children }) {
  return (
    <div onClick={onClick && onClick} className="Button">
      {children}
    </div>
  );
}

export default Button;
