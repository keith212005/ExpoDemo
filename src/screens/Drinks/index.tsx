import React from "react";
import { View, StyleSheet, FlatList, Platform } from "react-native";

// LOCAL IMPORTS
import { useFetch } from "hooks";
import { DrinkCard, Loader } from "@components";
import { useNavigation } from "@react-navigation/core";

export const Drinks = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m"
  );

  const renderFlatListItem = ({ item }: any) => {
    return <DrinkCard item={item} />;
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        data={data?.drinks}
        renderItem={renderFlatListItem}
        keyExtractor={(item) => item.idDrink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
