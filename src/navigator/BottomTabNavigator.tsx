import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, useColorScheme, Pressable } from "react-native";
import { Home } from "screens/Home";
import { DrawerActions } from "@react-navigation/native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BottomTab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  const { colors } = useTheme() as CustomTheme;
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => {}}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={colors.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginLeft: 20,
              })}
            >
              <FontAwesome
                name="bars"
                size={25}
                color={colors.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
