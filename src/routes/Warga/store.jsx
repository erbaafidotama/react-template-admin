import create from "zustand";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
export const useWargaStore = create((set) => ({
  posts: {},
  hasErrors: false,
  fetchPost: async (token) => {
    try {
      const response = await axios.get(url);

      set((state) => ({ posts: (state.posts = response) }));
    } catch (err) {
      set(() => ({ hasErrors: true }));
    }
  },
}));
