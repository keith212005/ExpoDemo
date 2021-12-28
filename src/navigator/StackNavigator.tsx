import React from "react";
import { useColorScheme } from "react-native";

// THIRD PARTY IMPORTS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// LOCAL IMPORTS
import * as Screen from "@screens";
import { SCREENS } from "@constants";
import { Light, Dark } from "@resources";
import { navigationRef } from "./RootNavigation";
import LinkingConfiguration from "./LinkingConfiguration";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { DrawerNavigator } from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const colorScheme = useColorScheme() as any;

  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any
  ) => {
    return (
      <Stack.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? Dark : Light}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {_addScreen("Login" as never)}
        {_addScreen("Signup" as never)}
        {_addScreen("DrawerNavigator" as never, true, {
          component: DrawerNavigator,
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
