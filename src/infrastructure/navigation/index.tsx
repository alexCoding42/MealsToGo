import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app.navigator";
import AccountNavigator from "./account.navigator";
import { useAuth } from "../../services/authentication/authentication.context";

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
