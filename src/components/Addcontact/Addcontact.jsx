import React, { useState } from "react";

const Addcontact = ({ addContactHandler }) => {
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });
    const changeInputHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        addContactHandler(contact);
        setContact({ name: "", email: "", phone: "" });
    };

    return (
        <form
            className="flex items-center justify-center gap-5"
            onSubmit={formSubmitHandler}
        >
            <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                    className="border-2 border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={changeInputHandler}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">E-Mail</label>
                <input
                    className="border-2 border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={changeInputHandler}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone">Phone Number</label>
                <input
                    className="border-2 border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={changeInputHandler}
                />
            </div>
            <div className="flex items-end justify-end">
                <button
                    className="bg-blue-500 p-2 text-white rounded-lg"
                    type="submit"
                >
                    Add Contact
                </button>
            </div>
        </form>
    );
};

export default Addcontact;
