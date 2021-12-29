import React from "react";
import { StyleSheet } from "react-native";

// THIRD PARTY IMPORTS
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from "@navigator";

// LOCAL IMPORTS
import { DrawerContent } from "@components";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"TabNavigator"}
      screenOptions={{
        drawerType: "back", // important otherwise messup drawerleftside animation
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
