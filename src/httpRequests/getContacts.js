import requests from "./baseUrl";

const getContacts = () => {
    return requests.get("/contacts");
};

export default getContacts;
