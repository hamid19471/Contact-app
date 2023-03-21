import React, { useState, useEffect } from "react";
import Addcontact from "../Addcontact/Addcontact";
import ContactList from "../ContactList/ContactList";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContactSingle from "../ContactSingle/ContactSingle";
import getContacts from "../../httpRequests/getContacts";
import removeContact from "../../httpRequests/removeContact";
import addContact from "../../httpRequests/addContact";

const MainContactApp = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();
    const addContactHandler = async (contact) => {
        try {
            const { data } = await addContact(contact);
            setContacts([...contacts, data]);
            navigate("/");
        } catch (error) {}
    };

    const deleteContactHandler = (id) => {
        try {
            removeContact(id);
            const newContactList = contacts.filter((item) => item.id !== id);
            setContacts(newContactList);
        } catch (error) {}
    };

    useEffect(() => {
        const getContactData = async () => {
            try {
                const { data } = await getContacts();
                setContacts(data);
            } catch (error) {}
        };
        getContactData();
    }, []);

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
