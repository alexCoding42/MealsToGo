import React, { useMemo } from "react";
import { AntDesign } from "@expo/vector-icons";
import { RestaurantProps } from "../../services/restaurants/types";

import { useFavorite } from "../../services/favourites/favourites.context";

import { FavouriteButton } from "./favourites.styles";

type FavouriteProps = {
  restaurant: RestaurantProps;
};

const Favourite = ({ restaurant }: FavouriteProps) => {
  const { favourites, addToFavourites, removeFromFavourites } = useFavorite();

  const isFavourite = useMemo(() => {
    return favourites.find((r) => r.placeId === restaurant.placeId);
  }, [favourites, restaurant.placeId]);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
