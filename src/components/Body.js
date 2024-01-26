import { useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [copyOfListOfRestaurants, setCopyOfListOfRestaurants] = useState([]);
  const [isTopRatedRestaurants, setIsTopRatedRestaurants] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

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

  const filterTopRestaurants = () => {
    setIsTopRatedRestaurants((prevState) => {
      if (prevState === true) {
        // If previously it was true, reset to the original list
        setListOfRestaurants(copyOfListOfRestaurants);
      } else {
        // If previously it was false, filter the list
        const filteredList = copyOfListOfRestaurants.filter(
          (res) => res?.info?.avgRating > 4.0
        );
        if (filteredList?.length === 0) {
          setErrorMessage(true);
        }
        setListOfRestaurants(filteredList);
      }
      return !prevState; // Toggle the state
    });
  };

  const filterResCards = () => {
    if (searchText.length === 0) {
      setListOfRestaurants(copyOfListOfRestaurants);
      setErrorMessage(false);
      return;
    }
    const searchBasedFilter = copyOfListOfRestaurants.filter((res) => {
      return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    if (searchBasedFilter?.length === 0) {
      setErrorMessage(true);
    }
    setListOfRestaurants(searchBasedFilter);
  };

  {
    if (errorMessage) {
      return <h4>No Such Restaurants found,Please reload the page!</h4>;
    }
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search_res"
          placeholder="Search for a restaurant!"
        />
        <button onClick={filterResCards} className="search_btn">
          Search
        </button>
        <button onClick={filterTopRestaurants} className="filter-btn">
          {isTopRatedRestaurants ? "All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
