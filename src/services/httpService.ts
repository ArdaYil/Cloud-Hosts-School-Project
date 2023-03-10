

import axios from "axios";

const endpoint: string = "http://localhost:8000/api/reviews";
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}

const get = () => axios.get(endpoint, config);

export default {
    get: get,
}