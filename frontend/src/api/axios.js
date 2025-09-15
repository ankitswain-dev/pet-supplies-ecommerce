const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ use env, not localhost
  headers: {
    "Content-Type": "application/json"
  }
});
export default instance;
