import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 10000
});

export const getRecommendations = async (book) => {
  const response = await api.get(`/recommend/${encodeURIComponent(book)}`);
  return response.data;
};

export const trackRead = async (book) => {
  const response = await api.post(`/user/read`, null, {
    params: { book, user_id: 1 }
  });
  return response.data;
};

export const getTrending = async () => {
  const response = await api.get("/seller/trending");
  return response.data;
};

export const getAnalytics = async () => {
  const response = await api.get("/seller/analytics");
  return response.data;
};

export const getDemandPrediction = async () => {
  const response = await api.get("/seller/predict-demand");
  return response.data;
};

export default api;
