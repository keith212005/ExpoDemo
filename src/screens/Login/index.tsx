import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

// LOCAL IMPORTS
import { Input, SquareButton } from "@components";
import { navigate, resetNavigation } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { auth } from "@services";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Login = (props: any) => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <View style={styles.container}>
      <Input label={"Email"} />
      <Input label={"Password"} secureTextEntry={true} />
      <SquareButton
        title={"Submit"}
        onPress={() => {
          createUserWithEmailAndPassword(
            auth,
            "keith212005@gmail.com",
            "password"
          )
            .then((cred) => {
              console.log(cred);
              resetNavigation("BottomTabNavigator");
            })
            .catch((err) => {
              console.log("auth errr>>>", err);

              Alert.alert(err);
            });
        }}
      />

      <TouchableOpacity onPress={async () => navigate("Signup")}>
        <Text style={[styles.signup, { color: colors.tint }]}>
          New account? Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  signup: {
    textAlign: "right",
  },
});
