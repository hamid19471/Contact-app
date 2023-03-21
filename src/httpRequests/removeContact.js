import requests from "./baseUrl";

const removeContact = (id) => {
    return requests.delete(`/contacts/${id}`);
};

export default removeContact;
