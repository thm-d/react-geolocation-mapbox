import React from 'react';


export const InputSelect = (props) => {
  const {label, name, id, defaultValue} = props

  return (
    <div className="flex flex-col items-start mt-2">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="mt-2 block w-full rounded-md border-0 p-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={defaultValue}
      >
        <option>---</option>
        <option>Individual</option>
        <option>Company</option>
        <option>Collectivity</option>
      </select>
    </div>
  );
};