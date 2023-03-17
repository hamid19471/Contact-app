import React from "react";

const ContactCard = ({ name, email, phone, onDelete }) => {
    return (
        <div className="flex flex-col max-w-[350px] items-center justify-center gap-5 bg-violet-500 py-8 text-white m-3 rounded-lg shadow-lg text-center">
            <div>
                <p className="font-bold text-xl my-1">Name</p>
                <span className="font-bold uppercase text-sm bg-slate-100 p-2 text-black rounded-lg">
                    {name}
                </span>
            </div>
            <div>
                <p className="font-bold text-xl my-1">E-Mail</p>
                <span className="font-bold uppercase text-sm bg-slate-100 p-2 text-black rounded-lg">
                    {email}
                </span>
            </div>
            <div>
                <p className="font-bold text-xl my-1">Phone Number</p>
                <span className="font-bold uppercase text-sm bg-slate-100 p-2 text-black rounded-lg">
                    {phone}
                </span>
            </div>
            <div className="flex items-center justify-between w-full">
                <button
                    className="py-1 px-5 bg-red-600 font-bold mx-2 text-sm rounded-lg"
                    onClick={onDelete}
                >
                    Deleter
                </button>
                <button className="py-1 px-5 bg-amber-400 font-bold mx-2 text-sm rounded-lg">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
