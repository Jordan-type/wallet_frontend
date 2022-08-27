import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  // baseURL: "https://walrus-app-xq3jr.ondigitalocean.app/api/v1/",
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "*"
  },
});
