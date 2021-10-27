import axios from "axios";

export default axios.create({
  baseURL: "https://fend-challenge.herokuapp.com/api/v1",
});
