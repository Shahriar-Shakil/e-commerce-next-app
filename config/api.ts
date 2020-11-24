import axios from "axios";
export const request = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
