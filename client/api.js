
import axios from "axios";


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/v1",
});


export default api