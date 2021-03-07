import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRestaurant } from "../../interfaces";

interface FavouritesContext {}

type FavouritesContextProviderProps = {
  children: React.ReactNode;
};

export const FavouritesContext = createContext<FavouritesContext>({});

export const FavouritesContextProvider = ({
  children,
}: FavouritesContextProviderProps) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant: IRestaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: IRestaurant) => {
    const newFavourites = favourites.filter(
      (x: IRestaurant) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
