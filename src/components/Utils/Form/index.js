import React from 'react';
import { InputText } from "../InputText";
import { InputSelect } from "../InputSelect";

export const Form = () => {

  return (
      <div className="mb-3">
        <InputText id="name"
                   name="name"
                   label="Name"
                   type="text"
                   placeholder="Enter your name" />
        <InputText id="description"
                   name="description"
                   label="Description"
                   type="text"
                   placeholder="Enter your description" />
        <InputSelect id="type"
                     name="type"
                     label="Type"
                     defaultValue="---" />
      </div>
  );
};
