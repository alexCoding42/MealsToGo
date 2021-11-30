import React from "react";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

export type RootStackParamList = {
  Settings: undefined;
  Favourites: undefined;
  Camera: undefined;
};

const SettingsStack = createStackNavigator<RootStackParamList>();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
