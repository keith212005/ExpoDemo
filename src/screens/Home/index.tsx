import { resetNavigation } from "@navigator";
import { signOut } from "@services";
import { saveUserInfo } from "actions/saveUserInfo";
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const Home = (props: any) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => {
    console.log("state in home>>>>", state.userInfo.email);
    return state.userInfo;
  });

  const handleSignOut = async () => {
    dispatch(saveUserInfo(""));
    console.log(signOut());
    //  signOut();
    resetNavigation("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Username: {userInfo?.email}</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 20,
  },
});
