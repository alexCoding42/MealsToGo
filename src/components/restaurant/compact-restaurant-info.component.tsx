import React from "react";
import { Platform } from "react-native";
import { RestaurantProps } from "../../services/restaurants/types";

import Text from "../typography/text.component";

import {
  CompactImage,
  CompactWebview,
  Item,
} from "./compact-restaurant-info.styles";

type CompactRestaurantInfoProps = {
  restaurant: RestaurantProps;
  isMap?: boolean;
};

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({
  restaurant,
  isMap,
}: CompactRestaurantInfoProps) => {
  return (
    <Item>
      {isAndroid && isMap ? (
        <CompactWebview source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}

      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
