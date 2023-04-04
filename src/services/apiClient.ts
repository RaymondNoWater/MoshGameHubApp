import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb8024763644468ebad8f20bc46767ba",
  },
});
