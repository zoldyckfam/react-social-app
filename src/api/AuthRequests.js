import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });//create with a base url of our proxy, we stored in package.json

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
