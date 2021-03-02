import React, { useState, createContext, useEffect, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

interface RestaurantsContext {
  restaurants?: any;
  isLoading?: boolean;
  error?: string;
}

type RestaurantsContextProviderProps = {
  children: React.ReactNode;
};

export const RestaurantsContext = createContext<RestaurantsContext>({});

export const RestaurantsContextProvider = ({
  children,
}: RestaurantsContextProviderProps) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location = "" } = useContext(LocationContext);

  const retrieveRestaurants = (restaurantLocation: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(restaurantLocation)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
