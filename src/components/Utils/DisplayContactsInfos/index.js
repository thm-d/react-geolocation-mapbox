import React from 'react';


export const DisplayContactsInfos = (props) => {
  const {name, description, type} = props
  return (
      <div className="flex flex-col items-start">
        <p className="my-3 text-xl font-medium text-indigo-600">{name}</p>
        <p className="mb-3 text-xl font-medium text-indigo-600">{description}</p>
        <p className="mb-3 text-xl font-medium text-indigo-600">{type}</p>
      </div>
  );
};