import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const getRoommateListRespone = (data) => api.get('/roommate', data);
export default api;



// module.exports = {getRoommateListRespone};