import React, { useState, useEffect } from "react";
import Addcontact from "../Addcontact/Addcontact";
import ContactList from "../ContactList/ContactList";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContactSingle from "../ContactSingle/ContactSingle";
const MainContactApp = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();
    const addContactHandler = (contact) => {
        setContacts([
            ...contacts,
            { id: Math.floor(Math.random() * 1000), ...contact },
        ]);
        navigate("/");
    };

    const deleteContactHandler = (id) => {
        const newContactList = contacts.filter((item) => item.id !== id);
        setContacts(newContactList);
    };

    useEffect(() => {
        const saveContact = localStorage.getItem("contacts");
        if (saveContact) {
            setContacts(JSON.parse(saveContact));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div>
            <Routes>
                <Route
                    path="/contact/:id"
                    element={<ContactSingle contacts={contacts} />}
                />
                <Route
                    path="/"
                    element={
                        <ContactList
                            contacts={contacts}
                            onDelete={deleteContactHandler}
                        />
                    }
                />
                <Route
                    path="/add"
                    element={
                        <Addcontact addContactHandler={addContactHandler} />
                    }
                />
            </Routes>
        </div>
    );
};
export default MainContactApp;
