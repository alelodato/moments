import axios from "axios";

axios.defaults.baseURL = "https://djangorest-project-0664e33c3cb4.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();