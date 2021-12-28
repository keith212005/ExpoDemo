import * as React from "react";
import { View, StyleSheet, Button, ButtonProps, ViewStyle } from "react-native";

interface DefaultProps extends ButtonProps {
  containerStyle?: ViewStyle;
}

export const SquareButton = (props: DefaultProps) => {
  return (
    <View style={[styles.container, { ...props.containerStyle }]}>
      <Button {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
