import requests from "./baseUrl";

const getOneContact = async (id) => {
    return requests.get(`/contacts/${id}`);
};

export default getOneContact;
