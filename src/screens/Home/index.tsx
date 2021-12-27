import { resetNavigation } from "@navigator";
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export const Home = (props: any) => {
  // console.log(props.route?.params);

  const handleSignOut = async () => {
    resetNavigation("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Home</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
  },
});
