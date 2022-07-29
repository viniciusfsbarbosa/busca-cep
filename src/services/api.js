import axios from "axios";

// Link API https://viacep.com.br/ws/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;