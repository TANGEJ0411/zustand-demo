import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const url = "https://raw.githubusercontent.com/TANGEJ0411/fakeDB/main/db.json";

const useHotel = create(
  persist(
    (set) => ({
      hotels: [],
      getHotels: async () => {
        const response = await axios.get(url);
        set({ hotels: response.data.hotelaccount });
      },
    }),
    // 處理要存再local storage 或 session storage
    {
      name: "hotel",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useHotel;
