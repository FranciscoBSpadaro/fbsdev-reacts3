import axios from "axios";

const api = axios.create({
  baseURL: "https://fbsdev-uploads3.herokuapp.com"
});

export default api;
