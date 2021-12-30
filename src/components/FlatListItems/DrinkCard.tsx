import React from "react";
import { Text, View } from "react-native";

// LOCAL IMPORTS
import { Card, ProgressiveImage } from "@components";
import { responsiveWidth } from "@resources";
import { useGlobalStyles } from "@hooks";

// THIRD PARTY IMPORTS
import { ScaledSheet, moderateScale, scale } from "react-native-size-matters";

interface DrinkCardProps {
  item: any;
}

export const DrinkCard = (props: DrinkCardProps) => {
  const { textStyle, squareLayout, layoutDirection } = useGlobalStyles();

  const _renderText = (title: string, text: string) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={[{ ...textStyle(moderateScale(11), "text", "NUNITO_BOLD") }]}
        >
          {title}
        </Text>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              {
                ...textStyle(moderateScale(9), "text", "NUNITO_BOLD_ITALIC"),
              },
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Card style={styles.inputContainer}>
      <ProgressiveImage
        source={{ uri: props.item.strDrinkThumb }}
        style={[styles.image, { ...squareLayout(scale(100)) }]}
        resizeMode="cover"
      />
      <View style={{ marginLeft: 10, flex: 9 }}>
        {_renderText("Name: ", props.item.strDrink)}
        {_renderText("Category: ", props.item.strCategory)}
        {_renderText("Glass Type: ", props.item.strGlass)}
        {_renderText("Type: ", props.item.strAlcoholic)}
        {_renderText("Type: ", props.item.strInstructions)}
      </View>
    </Card>
  );
};

const styles = ScaledSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    padding: moderateScale(10),
    margin: moderateScale(10),
  },
  image: {
    borderRadius: 8,
  },

  drinkName: {
    width: responsiveWidth(20),
  },
});
