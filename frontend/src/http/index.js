import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => api.post("auth/send-otp", data);
export const verifyOtp = (data) => api.post("/auth/verify-otp", data);
export const activate = (data) => api.post("/auth/activate", data);
export const getallflats = (data) => api.get("/flat/flats/", data);
export const getoneflat = (data) => api.get(`/flat/flats/${data}`, data);

export default api;

// module.exports = {getRoommateListRespone};