import { useTheme } from "@react-navigation/native";
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
  const { colors } = useTheme() as CustomTheme;
  return (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }]}>{props.label}</Text>
      <TextInput
        style={[styles.input, { borderColor: colors.text }]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
  },
});
