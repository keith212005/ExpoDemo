import { StyleSheet, Platform } from "react-native";

// THIRD PARTY IMPORTS
import {
  useNavigation,
  useTheme,
  DrawerActions,
} from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCAL IMPORTS
import * as Screen from "@screens";
import { SCREENS } from "@constants";

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

  /**
  |--------------------------------------------------
  | Global Declaration section end
  |--------------------------------------------------
  */

  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any
  ) => {
    return (
      <BottomTab.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Drinks"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.tint,
        headerShown: true,
        gestureEnabled: true,
        tabBarStyle: { display: Platform.OS === "web" ? "none" : undefined },
        headerLeft: ({ color }: any) => (
          <FontAwesome
            name="bars"
            color={color}
            size={30}
            style={{ paddingHorizontal: 15 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
      })}
    >
      {_addScreen("Home", false, {
        options: {
          tabBarIcon: ({ color }: any) => (
            <FontAwesome
              name="home"
              color={color}
              size={30}
              style={{ marginBottom: -10 }}
            />
          ),
        },
      })}
      {_addScreen("Drinks", false, {
        options: {
          tabBarIcon: ({ color }: any) => (
            <Entypo
              name="drink"
              color={color}
              size={23}
              style={{ marginBottom: -10 }}
            />
          ),
        },
      })}
      {/* <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => {}}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
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
            <FontAwesome
              name="bars"
              size={25}
              color={colors.text}
              style={{ paddingHorizontal: 15 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      /> */}
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
function createStackNavigator() {
  throw new Error("Function not implemented.");
}
