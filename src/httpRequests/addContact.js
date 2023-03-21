import requests from "./baseUrl";

const addContact = (contact) => {
    return requests.post("/contacts", contact);
};

export default addContact;
