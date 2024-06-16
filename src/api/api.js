import axios from "axios";

let base_url = `http://localhost:5000`;
export default function () {
    const axiosInstance = axios.create({
        baseURL: base_url,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*'
        },
    });
    return axiosInstance;
}
