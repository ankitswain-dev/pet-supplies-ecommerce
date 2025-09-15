import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ now points to Render
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
