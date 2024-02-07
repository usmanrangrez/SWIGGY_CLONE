import { useState } from "react";

import RestaurantCard, { vegRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestauarants from "../utils/useRestauarants";
import useOnline from "../utils/useOnline";
import UserOffline from "./UserOffline";

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
      return <h4>No Such Restaurants found,Please reload the page!</h4>;
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
