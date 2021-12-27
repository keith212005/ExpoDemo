import * as React from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import { BottomTabNavigator } from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { NavigationContainer } from "@react-navigation/native";

// LOCAL IMPORT
import { Light, Dark } from "@resources";
import { Home, Login } from "@screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const colorScheme = useColorScheme() as any;
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? Dark : Light}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});
