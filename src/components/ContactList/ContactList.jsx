import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, onDelete, onEdit }) => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <Link
                    to="/add"
                    className="py-2 px-6 bg-violet-500 text-white rounded-lg"
                >
                    Add New Contact
                </Link>
            </div>
            <div className="grid grid-cols-7 gap-3">
                {contacts.map((item) => {
                    return (
                        <ContactCard
                            key={item.id}
                            onDelete={() => onDelete(item.id)}
                            onEdit={() => onEdit(item.id)}
                            {...item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ContactList;
