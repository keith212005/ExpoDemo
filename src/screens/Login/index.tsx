import { Input, SquareButton } from "@components";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Login = (props: any) => {
  return (
    <View style={styles.container}>
      <Input label={"Email"} />
      <Input label={"Password"} secureTextEntry={true} />
      <SquareButton
        title={"Submit"}
        onPress={() => props.navigation.navigate("BottomTabNavigator")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
});
