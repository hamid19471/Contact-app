import requests from "./baseUrl";

const updateOneContact = async (id, data) => {
    return requests.put(`/contacts/${id}`, data);
};

export default updateOneContact;
