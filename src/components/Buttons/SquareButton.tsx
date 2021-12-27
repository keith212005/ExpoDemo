import * as React from "react";
import { View, StyleSheet, Button, ButtonProps } from "react-native";

interface DefaultProps extends ButtonProps {}

export const SquareButton = (props: DefaultProps) => {
  return (
    <View style={styles.container}>
      <Button {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
