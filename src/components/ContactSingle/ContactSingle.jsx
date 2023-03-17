import React from "react";
import { Link, useParams } from "react-router-dom";

const ContactSingle = ({ contacts }) => {
    const { id } = useParams();
    const contact = contacts.find((item) => item.id == id);
    const { name, email, phone } = contact;

    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <Link to="/">Back</Link>
        </div>
    );
};

export default ContactSingle;
