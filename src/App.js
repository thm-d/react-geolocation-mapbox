import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { ContactList } from "./components/ContactList";
import { MapContainer } from "./components/Map";
import { Button } from "./components/Utils/Button";


export const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: "John Doe",
      description: "CTO",
      type: "Company",
      coords: { lng: 5.997809614585066, lat: 47.25216557801369 }
    },
    {
      name: "Thomas Dauriac",
      description: "Junior web developer",
      type: "Individual",
      coords: { lng: 2.4841816147613827, lat: 48.87424727260654 }
    }
  ]);


  useEffect(() => {
    const dataLocalStorage = localStorage.getItem("contacts");
    if (dataLocalStorage) {
      setContacts(JSON.parse(dataLocalStorage));
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, []);


  return (
    <div>
      <Header />
      <form>
        <Button label="DATA RESET "
                className="ml-4 mb-4"
                onClick={() => localStorage.removeItem("contacts")}
                type="submit" />
      </form>
      <div className="content mx-4 flex justify-start">
        <MapContainer contacts={contacts} setContacts={setContacts} />
        <ContactList contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  );
};
