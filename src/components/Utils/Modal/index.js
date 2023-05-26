import React from 'react';

export const Modal = (props) => {
  const { title, setOpen, children, closeModal } = props;

  return (
    <div className="calc"
         onClick={closeModal ? closeModal : () => setOpen(null)}>
      <div className="modal">
        <h2 className="text-3xl font-semibold text-zinc-700 mb-4 uppercase">{title}</h2>
        <div className="text-blue-900">{children}</div>
      </div>
    </div>
  );
};
