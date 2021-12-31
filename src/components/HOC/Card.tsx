import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export const Card = (props: any) => {
  const { colors } = useTheme();
  return (
    <View
      style={[{ backgroundColor: colors.card }, cardStyles.card, props.style]}
    >
      {props.children}
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 10,
  },
});
