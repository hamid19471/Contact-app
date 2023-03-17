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
    return (
        <div>
            <Addcontact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} />
        </div>
    );
};
export default MainContactApp;
