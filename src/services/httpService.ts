

import axios from "axios";

const endpoint: string = "https://cloud-hosts-api.onrender.com/api/reviews";
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}

const get = () => axios.get(endpoint, config);
const post = (data: object) => axios.post(endpoint, data);

export default {
    get,
    post,
}