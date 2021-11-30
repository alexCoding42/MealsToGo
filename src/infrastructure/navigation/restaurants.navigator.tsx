import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

import { RestaurantProps } from "../../services/restaurants/types";

export type RootStackParamList = {
  Restaurants: undefined;
  RestaurantDetail: { restaurant: RestaurantProps };
};

const RestaurantStack = createStackNavigator<RootStackParamList>();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
