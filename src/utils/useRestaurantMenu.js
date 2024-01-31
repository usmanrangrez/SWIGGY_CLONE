import { useState, useEffect } from "react";
import axios from "axios";
import { SWIGGY_RESTAURANT_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [actualMenu, setActualMenu] = useState([]);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await axios.get(SWIGGY_RESTAURANT_MENU_API_URL + resId);
      const info = await data?.data?.data?.cards[0]?.card?.card?.info;

      const menuDets = await data?.data?.data?.cards[2]?.groupedCard
        ?.cardGroupMap?.REGULAR;

      setResInfo(info);
      setActualMenu(menuDets);
    } catch (error) {
      console.log(error);
    }
  };

  return { resInfo, actualMenu };
};
export default useRestaurantMenu;
