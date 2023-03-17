import React, { useState } from "react";
import Addcontact from "../Addcontact/Addcontact";
import ContactList from "../ContactList/ContactList";

const MainContactApp = () => {
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        setContacts([
            ...contacts,
            { id: Math.floor(Math.random() * 1000), ...contact },
        ]);
    };

    const deleteContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            contact.id !== id;
        });
        setContacts(newContactList);
    };

    return (
        <div>
            <Addcontact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
        </div>
    );
};
export default MainContactApp;
