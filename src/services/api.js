import axios from "axios";

const api = axios.create({
  baseURL: "https://fbs-dev-uploads3.herokuapp.com/"
});

export default api;
