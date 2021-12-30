import { useTheme } from "@react-navigation/native";
import { ViewStyle } from "react-native";
import { fonts } from "resources/fonts";

export const useGlobalStyles = () => {
  const { colors } = useTheme();

  const textStyle = (
    fontSize: number,
    color: keyof typeof colors,
    fontFamily: keyof typeof fonts
  ) => {
    return {
      fontSize: fontSize,
      color: colors[color],
      fontFamily: fontFamily,
    };
  };

  const layoutDirection = (
    flexDirection: string,
    justifyContent: string,
    alignItems: string
  ) => {
    return {
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems,
    };
  };

  const squareLayout = (size: number) => {
    return {
      width: size,
      aspectRatio: 1,
    };
  };

  return { textStyle, layoutDirection, squareLayout };
};
