import create from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

const url = "http://localhost:8080/login";

export const useLoginStore = create(
  persist(
    (set, get) => ({
      token: {},
      postLogin: async (data) => {
        console.log("data post", data);
        try {
          axios
            .post(url, {
              username: data.username,
              password: data.password,
            })
            .then((response) => {
              set({ token: response.data.token });
            });
        } catch (err) {
          set(() => ({ hasErrors: true }));
        }
      },
    }),
    {
      name: "jwtToken",
      getStorage: () => localStorage,
    }
  )
);
