// components/Button.js
import React from 'react';

export const Button = ({ children }) => {
  return (
    <button className="bg-light-green-200 text-neutral-700 px-[24px] py-[8px] rounded-[200px] focus:outline-none transition duration-300 hover:bg-light-green-300">
      {children}
    </button>
  );
};

export default Button;
