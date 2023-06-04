import Axios from "axios";

const options = {
  baseURL: "http://localhost:8080/",
};

const instance = Axios.create(options);

instance.defaults.timeout = 5000;

export default instance;
