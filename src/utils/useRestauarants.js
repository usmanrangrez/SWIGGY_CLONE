import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import axios from "axios";

const useRestaurants = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [copyOfListOfRestaurants, setCopyOfListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(SWIGGY_API_URL);
      const cards = response?.data?.data?.cards;
      let restaurants;

      for (let i = 0; i < cards?.length; i++) {
        const res =
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (res) {
          restaurants = res;

          break;
        }
      }

      if (restaurants) {
        setListOfRestaurants(restaurants);
        setCopyOfListOfRestaurants(restaurants);
      } else {
        console.log("No valid data received from API!");
        setErrorMessage("No restaurants data available.");
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setErrorMessage("Failed to fetch data. Please try again.");
    }
  };
  return {
    listOfRestaurants,
    copyOfListOfRestaurants,
    errorMessage,
    setListOfRestaurants,
    setErrorMessage,
  };
};

export default useRestaurants;
