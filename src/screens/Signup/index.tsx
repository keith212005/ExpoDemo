import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInputProps,
} from "react-native";

// THIRD PARTY IMPORTS
import isEmpty from "lodash/isEmpty";
import { useTheme } from "@react-navigation/native";

// LOCAL IMPORTS
import { Input, SquareButton } from "@components";
import { resetNavigation } from "@navigator";
import { signUp } from "@services";

const initialState: any = {
  email: "",
  password: "",
};

export const Signup = () => {
  const { colors } = useTheme() as CustomTheme;
  const [state, setStates] = useState(initialState);

  const handleSubmit = () => {
    if (!isEmpty(state.email) && !isEmpty(state.password)) {
      signUp({ email: state.email, password: state.password })
        .then(() => {
          Alert.alert("Message", "Successfully registered. Please login", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => resetNavigation("Login") },
          ]);
        })
        .catch((err) => {
          Alert.alert(JSON.stringify(err));
        });
    } else {
      Alert.alert("Email or Password cannot be empty");
    }
  };

  const _renderInput = (
    index: number,
    label: string,
    extraProps: TextInputProps
  ) => {
    return <Input label={label} {...extraProps} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      {_renderInput(0, "Email", {
        onChangeText: (text) => {
          setStates((prev: any) => {
            return { ...prev, email: text };
          });
        },
      })}
      {_renderInput(0, "Password", {
        secureTextEntry: true,
        onChangeText: (text) => {
          setStates((prev: any) => {
            return { ...prev, password: text };
          });
        },
      })}
      <SquareButton title={"Submit"} onPress={handleSubmit} />
      <TouchableOpacity onPress={async () => resetNavigation("Login")}>
        <Text style={[styles.signin, { color: colors.tint }]}>
          Already have account? SignIn
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
    fontSize: 26,
    marginBottom: 40,
    textAlign: "center",
  },
  signin: {
    marginTop: 30,
    textAlign: "right",
  },
});
