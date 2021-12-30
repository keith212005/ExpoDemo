import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

// LOCAL IMPORTS
import { saveUserInfo } from "actions/saveUserInfo";
import { signOut } from "@services";
import { navigate, resetNavigation } from "@navigator";
import { useTheme } from "@react-navigation/native";

export const DrawerContent = (props: any) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.userInfo);
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={[{ color: colors.text }, styles.welcome]}>Welcome!</Text>
        <Text style={[{ color: colors.text }]}>{userInfo.email}</Text>
      </View>
      <DrawerContentScrollView {...props} bounces={true}>
        <DrawerItem
          icon={({}) => (
            <MaterialCommunityIcons name="home" size={22} color={colors.text} />
          )}
          label={"Home"}
          labelStyle={{}}
          onPress={() => navigate("Home")}
        />
        <DrawerItem
          style={{}}
          icon={({}) => <Entypo name="drink" size={20} color={colors.text} />}
          label={"Drinks"}
          labelStyle={{}}
          onPress={() => navigate("Drinks")}
        />
        <DrawerItem
          icon={({}) => (
            <MaterialCommunityIcons
              name="logout"
              size={22}
              color={colors.text}
            />
          )}
          label={"Logout"}
          labelStyle={{}}
          onPress={() => {
            dispatch(saveUserInfo(""));
            signOut();
            resetNavigation("Login");
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
  },
  header: {
    padding: 20,
  },
});
