import React, { useState } from 'react';
import { Modal } from "../Utils/Modal";
import { DisplayContactsInfos } from "../Utils/DisplayContactsInfos";


export const ContactList = (props) => {
  const { contacts } = props;
  const [openedContactModalIndex, setOpenedContactModalIndex] = useState(null);

  return (
    <div className="mx-5">
      <h2 className="text-3xl font-semibold text-zinc-700 mb-3 uppercase">contacts</h2>
      <ul className="contacts-list">
        {contacts.map((contact, index) => (
          <li key={crypto.randomUUID()}
              onClick={() => setOpenedContactModalIndex(index)}
              className="text-indigo-600 hover:opacity-80 cursor-pointer">{contact.name}</li>
        ))}
      </ul>
      {openedContactModalIndex !== null ?
        <Modal title="Information"
               setOpen={setOpenedContactModalIndex}>
          <DisplayContactsInfos name={contacts[openedContactModalIndex].name}
                                description={contacts[openedContactModalIndex].description}
                                type={contacts[openedContactModalIndex].type} />
        </Modal> : null}
    </div>
  );
};