/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { forwardRef, MutableRefObject, useRef } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

// THIRD PARTY IMPORTS
import { AntDesign } from "@expo/vector-icons";

interface SearchBarProps {
  refs?: MutableRefObject<any>;
  onChangeText: (str: string) => void;
  onCancel?: () => void;
}

export const SearchBar = forwardRef((props: SearchBarProps, ref) => {
  console.log("Seach bar render....");

  return (
    <View style={[styles.container]}>
      <AntDesign
        name="search1"
        color={"grey"}
        size={26}
        style={{ marginLeft: 3 }}
        onPress={() => {}}
      />

      <TextInput style={styles.input} ref={props.refs} {...props} />

      <AntDesign
        name="close"
        color={"grey"}
        size={26}
        style={{ marginRight: 3 }}
        onPress={() => {
          props.refs?.current?.clear();
          props.onCancel && props.onCancel();
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 15,
    padding: 5,
    flexDirection: "row",
    borderRadius: 100 / 2,
    backgroundColor: "#E2E0E5",
    alignItems: "center",
    alignSelf: Platform.OS === "web" ? "flex-end" : undefined,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
  },
});
