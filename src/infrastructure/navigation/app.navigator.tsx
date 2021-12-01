import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MapScreen from "../../features/map/screens/map.screen";

import SettingsNavigator from "./settings.navigator";
import RestaurantsNavigator from "./restaurants.navigator";

import { colors } from "../theme/colors";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
  Checkout: "md-cart",
};

type TabBarIconProps = {
  color: string;
  size: number;
};

export type RootBottomParamList = {
  Restaurants: undefined;
  Map: undefined;
  Settings: undefined;
  Checkout: undefined;
};

type Route = {
  route: {
    name: keyof typeof TAB_ICON;
  };
};

const Tab = createBottomTabNavigator<RootBottomParamList>();

const createScreenOptions = ({ route }: Route) => {
  const iconName: any = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: TabBarIconProps): React.ReactNode => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: colors.brand.primary,
      inactiveTintColor: colors.brand.muted,
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
