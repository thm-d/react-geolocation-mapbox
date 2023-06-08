import React, { useState } from 'react';
import Map, { Marker } from "react-map-gl";
import { Modal } from "../Utils/Modal";
import { Button } from "../Utils/Button";
import { Form } from "../Utils/Form";
import { DisplayContactsInfos } from "../Utils/DisplayContactsInfos";


export const MapContainer = (props) => {
  const { contacts, setContacts } = props;
  const [ open, setOpen ] = useState(false);
  const [ openModalContact, setOpenModalContact ] = useState(false);
  const [ target, setTarget ] = useState(false);
  const [ activeMap, setActiveMap ] = useState(true);
  const [ lngLat, setLngLat ] = useState({ lng: null, lat: null });
  const mapRef = React.useRef();

  const addContact = (e) => {
    e.preventDefault();
    const form = document.querySelector("#form");
    const data = new FormData(form);
    if (!data.get("name") || !data.get("description") || !data.get("type")) {
      throw new Error("Veuillez remplir les champs du formulaire ou quitter sans valider");
    } else {
      const contact = {
        name: data.get("name"),
        description: data.get("description"),
        type: data.get("type"),
        coords: { lng: lngLat.lng, lat: lngLat.lat }
      };
      const dataLocalStorage = JSON.parse(localStorage.getItem("contacts"));
      if (dataLocalStorage) {
        dataLocalStorage.push(contact);
        localStorage.setItem("contacts", JSON.stringify(dataLocalStorage));
      }
      setContacts([ ...contacts, contact ]);
      setOpen(false);
    }
  };

  const onClickMap = (e) => {
    setLngLat({ lng: e.lngLat.lng, lat: e.lngLat.lat });
    activeMap && setOpen(true);
    setActiveMap(true);
  };

  const addMarker = (lng, lat) => {
    return (
      <Marker key={ Math.random() }
              longitude={ lng }
              latitude={ lat }
              color="#e74c3c"
              onClick={ onClickMarker }
              anchor="bottom"
      >
        <div className="marker"></div>
      </Marker>
    );
  };

  const onClickMarker = (e) => {
    setActiveMap(false);
    const targetContact = contacts.filter(contact => contact.coords.lng === e.target._lngLat.lng);
    setTarget(targetContact[0]);
    setOpenModalContact(true);
  };

  const displayContactForm = () => {
    return (
      <form id="form" className="flex flex-col items-start">
        <Form/>
        <div>
          <Button label="Cancel"
                  className="mt-3 mr-3"
                  onClick={ () => {
                    setOpen(false);
                  } }
                  type="button"
          />
          <Button label="Confirm"
                  id="submit"
                  onClick={ addContact }
                  type="submit"
          />
        </div>
      </form>
    );
  };

  const closeModal = (e) => {
    const calc = document.querySelector(".calc");
    if (e.target === calc) {
      setOpen(false);
      setOpenModalContact(false);
    }
  };

  return (
    <>
      <Map ref={ mapRef }
           onClick={ onClickMap }
           initialViewState={ {
             longitude: 2.34,
             latitude: 48.85,
             zoom: 4.5
           } }
           style={ { width: '50vw', height: '500px' } }
           mapStyle="mapbox://styles/mapbox/streets-v12"
           mapboxAccessToken="pk.eyJ1IjoidGhtLWQiLCJhIjoiY2w4YTh1ZmxjMDM2MTQwbjF5b210OXR1bCJ9.ganmPYujshib9TYDqKUV7g"
      >
        { contacts ?
          contacts.map(contact => addMarker(contact.coords.lng, contact.coords.lat))
          : <></> }
      </Map>
      { open ?
        <Modal title="Add contact" closeModal={ closeModal }>{ displayContactForm() }</Modal> : null }
      { openModalContact ?
        <Modal title="Fiche contact" closeModal={ closeModal }>
          <DisplayContactsInfos name={ target.name }
                                description={ target.description }
                                type={ target.type }
          />
        </Modal> : null }
    </>
  );
};