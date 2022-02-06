import React from "react";
import classnames from "tailwindcss-classnames";

const Button = ({ text, onClick, ariaLabel, className }) => {
  return (
    <button
      aria-label={ariaLabel ? ariaLabel : text}
      type="button"
      className={classnames("self-center px-4 py-2 text-sm", className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
