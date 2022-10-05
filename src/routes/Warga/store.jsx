import create from "zustand";
import axios from "axios";

const url = "http://localhost:8080/warga";
export const useWargaStore = create((set) => ({
  bears: 0,
  people: {},
  hasErrors: false,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  //   fetchPeople: async () => {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     set({ people: json.items })
  //   }
  fetchPeople: async (token) => {
    console.log("fetch token", token);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "access-control-allow-origin, access-control-allow-headers",
        },
      });
      set((state) => ({ people: (state.data = response.data) }));
    } catch (err) {
      set(() => ({ hasErrors: true }));
    }
  },
}));
