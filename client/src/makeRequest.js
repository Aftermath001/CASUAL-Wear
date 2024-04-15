import axios from "axios";
export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`, // Make sure there is a space after 'Bearer'
    },
});