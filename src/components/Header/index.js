import React from 'react';


export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-5 bg-slate-200 h-16">
      <div className="ml-5">
        <a href="./index.html" className="flex flex-row items-center text-zinc-700">
          <i className="fa-solid fa-map-location fa-xl"></i>
          <p className="ml-3 text-xl font-semibold uppercase">GEOLOCATION APPLICATION</p>
        </a>
      </div>
      <div className="mr-5">
        <a href="https://www.mapbox.com/"
           className="text-indigo-600 hover:opacity-80 font-medium"
           target="_blank"
           rel="noopener noreferrer">
          Discover Mapbox
        </a>
      </div>
    </header>
  );
};