import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default api;



//REACT_APP_API_URL =  config vars url app heroku url do server backend  https://fbs-dev-uploads3.herokuapp.com/