import axios from "axios";

export const api = axios.create({
  baseURL: "https://ai-resume-analyzer-backend.onrender.com/api/analyze", // backend local URL
});
