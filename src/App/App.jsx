import React from "react";
import Contacts from "../Contacts/Contacts";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../FilterContacts/FilterContacts";
import style from "./App.module.css";

const App = function () {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Find contacts by name</h2>
      <Filter />
      <Contacts />
    </div>
  );
};

export default App;
