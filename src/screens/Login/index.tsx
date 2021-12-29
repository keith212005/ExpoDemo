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

// LOCAL IMPORTS
import { Input, SquareButton } from "@components";
import { DrawerNavigator, navigate } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { getUser, signIn } from "@services";
import { useDispatch, useSelector } from "react-redux";
import { saveUserInfo } from "actions/saveUserInfo";

const initialState: any = {
  email: "",
  password: "",
};

export const Login = () => {
  const { colors } = useTheme() as CustomTheme;
  const [state, setStates] = useState(initialState);
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.userInfo);

  const handleSubmit = () => {
    if (!isEmpty(state.email) && !isEmpty(state.password)) {
      signIn({ email: state.email, password: state.password })
        .then(() => dispatch(saveUserInfo(getUser())))
        .catch((err) => Alert.alert(JSON.stringify(err)));
    } else {
      Alert.alert("Email or Password cannot be empty");
    }
  };

  const _renderInput = (
    index: number,
    label: string,
    extraProps: TextInputProps
  ) => {
    return <Input label={label} placeholder={label} {...extraProps} />;
  };

  if (!isEmpty(userInfo)) return <DrawerNavigator />;

  return (
    <View style={styles.container}>
      <Text style={[styles.signin, { color: colors.text }]}>Sign In</Text>
      {_renderInput(0, "Email", {
        onChangeText: (text) => {
          setStates((prev: any) => {
            return { ...prev, email: text };
          });
        },
      })}
      {_renderInput(1, "Password", {
        secureTextEntry: true,
        onChangeText: (text) => {
          setStates((prev: any) => {
            return { ...prev, password: text };
          });
        },
      })}
      <SquareButton
        title={"Submit"}
        onPress={handleSubmit}
        containerStyle={{ marginTop: 20 }}
      />
      <TouchableOpacity
        style={styles.signup}
        onPress={async () => navigate("Signup")}
      >
        <Text style={[{ color: colors.tint }]}>New account? Signup</Text>
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
    marginTop: 30,
    textAlign: "right",
    alignSelf: "flex-end",
  },
  signin: {
    fontSize: 26,
    marginBottom: 40,
    alignSelf: "center",
  },
});
