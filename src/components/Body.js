import { useState } from "react";

import RestaurantCard, { vegRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestauarants from "../utils/useRestauarants";
import useOnline from "../utils/useOnline";
import UserOffline from "../components/UserOffline";
import { Link } from "react-router-dom";
import { CORS_EXTENSION_LINK } from "../utils/constants";

const Body = () => {
  const [isTopRatedRestaurants, setIsTopRatedRestaurants] = useState(false);
  const [searchText, setSearchText] = useState();
  const RestaurantCardsVeg = vegRestaurantCard(RestaurantCard);

  const {
    listOfRestaurants,
    copyOfListOfRestaurants,
    errorMessage,
    setListOfRestaurants,
    setErrorMessage,
  } = useRestauarants();

  const isOnline = useOnline();

  if (!isOnline) {
    return <UserOffline />;
  }
  const filterTopRestaurants = () => {
    setIsTopRatedRestaurants((prevState) => {
      if (prevState === true) {
        // If previously it was true, reset to the original list
        setListOfRestaurants(copyOfListOfRestaurants);
      } else {
        // If previously it was false, filter the list
        const filteredList = copyOfListOfRestaurants?.filter(
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
    const searchBasedFilter = copyOfListOfRestaurants?.filter((res) => {
      return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    if (searchBasedFilter?.length === 0) {
      setErrorMessage(true);
    }
    setListOfRestaurants(searchBasedFilter);
  };

  {
    if (errorMessage) {
      return (
        <div className="max-w-md mx-auto text-center p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Trouble Loading Data?
          </h3>
          <p className="text-sm font-bold text-gray-600 mb-2">
            If this is your first time visiting and the data isn't loading
            properly, it might be due to browser restrictions.
          </p>
          <p className="text-sm font-bold text-gray-600 mb-4">
            For a quick fix during development, consider installing a CORS
            extension for your browser.
            <Link
              to={CORS_EXTENSION_LINK}
              target="_blank"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Learn how
            </Link>{" "}
            (Chrome)
          </p>
          <p className="text-sm text-gray-600">
            If you're seeing this message under other circumstances, there might
            be a different issue,either{" "}
            <span className="font-bolder">Restauarnt is Not Found</span> or
            Please check be a different issue,either{" "}
            <span className="font-extrabold text-base">
              Restauarnt is Not Found
            </span>{" "}
            or Please check your connection or try again later.
          </p>
        </div>
      );
    }
  }

  {
    !isOnline && <div>Oh oh, looks like you are offline!</div>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-2 ">
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
          return restaurant?.info?.veg ? (
            <RestaurantCardsVeg
              key={restaurant?.info?.id}
              {...restaurant?.info}
            />
          ) : (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
