import axios from 'axios';

var api = axios.create({baseURL: 'https://sender-email-valhalla.herokuapp.com'});

export default api;