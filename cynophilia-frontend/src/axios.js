import axios from 'axios';

// connects to the backend using heroku
const instance = axios.create({
    baseURL: 'https://cynophilia-backend.herokuapp.com',
})

export default instance;
