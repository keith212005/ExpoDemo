import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";

interface DefaultProps extends TextInputProps {
  label?: string;
}

export const Input = (props: DefaultProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
  },
});
