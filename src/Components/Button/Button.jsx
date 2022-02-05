import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      aria-label={text}
      type="button"
      className="bg-indigo-800 self-center text-white px-4 py-2 text-sm rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
