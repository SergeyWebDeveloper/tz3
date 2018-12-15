import axios from "axios";

export const authGoogle = token => axios.post("/auth/google", { token });

export const loadFeeds = () => axios.get("/feeds");

export const deleteFeed = id => axios.delete(`/feeds/${id}`);

export const loadFeed = id => axios.get(`/feeds/${id}`);

export const updateFeed = (id, data) => axios.put(`/feeds/${id}`, { ...data });
