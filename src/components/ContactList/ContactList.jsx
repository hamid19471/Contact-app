import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className="grid grid-cols-7 gap-3">
            {contacts.map((item) => {
                return (
                    <ContactCard
                        key={item.id}
                        onDelete={() => onDelete(item.id)}
                        {...item}
                    />
                );
            })}
        </div>
    );
};

export default ContactList;
