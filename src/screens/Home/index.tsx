import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
