import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

// LOCAL IMPORTS
import { ProgressiveImage } from "@components";
import { responsiveWidth, scale, verticalScale } from "@resources";

interface DrinkCardProps {
  item: any;
}

export const DrinkCard = (props: DrinkCardProps) => {
  return (
    <View style={styles.container}>
      <ProgressiveImage
        source={{ uri: props.item.strDrinkThumb }}
        style={{ aspectRatio: 1, width: responsiveWidth(20), borderRadius: 8 }}
        resizeMode="cover"
      />
      <Text style={styles.drinkName}>{props.item.strDrink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexWrap: "wrap",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
  },
  drinkName: {
    width: scale(80),
    textAlign: "center",
  },
});
