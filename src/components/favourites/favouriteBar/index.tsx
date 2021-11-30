import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../../spacer/spacer.component";
import { CompactRestaurantInfo } from "../../restaurant/compact-restaurant-info.component";
import { Text } from "../../typography/text.component";
import { RestaurantProps } from "../../../services/restaurants/types";
import { FavouritesWrapper } from "./styles";

type FavouritesBarProps = {
  favourites: RestaurantProps[];
  onNavigate: (
    key: string,
    params?: RootStackParamList["RestaurantDetail"]
  ) => void;
};

const FavouritesBar = ({ favourites, onNavigate }: FavouritesBarProps) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
