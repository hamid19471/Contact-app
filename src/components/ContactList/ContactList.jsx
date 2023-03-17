import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts }) => {
    return (
        <div className="grid grid-cols-7 gap-3">
            {contacts.map((item) => {
                return <ContactCard key={item.id} {...item} />;
            })}
        </div>
    );
};

export default ContactList;
