import React from 'react';


export const Button = (props) => {
  const { label, id, type, className, onClick } = props;

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={`rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className || ""}`}
    >
      {label}
    </button>
  );
};