import axios from "axios";

const apiRouter = axios.create({
  baseURL: "http://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRouter;
