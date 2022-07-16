import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cynophilia-backend.herokuapp.com',
})

export default instance;