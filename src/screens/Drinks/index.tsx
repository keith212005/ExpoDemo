import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";

// THIRD PARTY IMPORTS
import isEmpty from "lodash.isempty";

// LOCAL IMPORTS
import { SearchBar } from "./searchBar";
import { DrinkList } from "./DrinkList";

export const Drinks = () => {
  let inputRef = useRef(null);
  let flatListRef = useRef<any>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isEmpty(search)) {
      const timer = setTimeout(() => flatListRef.current?.search(search), 700);
      return () => clearTimeout(timer);
    } else {
      flatListRef?.current?.search("");
    }
  }, [search]);

  /**
  |--------------------------------------------------
  | Global area end
  |--------------------------------------------------
  */

  return (
    <View style={styles.container}>
      <SearchBar
        refs={inputRef}
        onChangeText={(text) => setSearch(text)}
        onCancel={() => flatListRef?.current?.search("")}
      />
      <DrinkList ref={flatListRef} searchString={search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
