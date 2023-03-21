import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getOneContact from "../../httpRequests/getOneContact";

const EditContact = ({ editContactHandler }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });
    const changeInputHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        editContactHandler(id, contact);
        setContact({ name: "", email: "", phone: "" });
        navigate("/");
    };

    useEffect(() => {
        const getOne = async () => {
            try {
                const { data } = await getOneContact(id);
                setContact({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                });
            } catch (error) {}
        };
        getOne();
    }, []);

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
                    required
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
                    required
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
                    required
                    value={contact.phone}
                    onChange={changeInputHandler}
                />
            </div>
            <div className="flex items-end justify-end">
                <button
                    className="bg-blue-500 p-2 text-white rounded-lg"
                    type="submit"
                >
                    Update Contact
                </button>
            </div>
        </form>
    );
};

export default EditContact;
