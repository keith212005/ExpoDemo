import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          SPACE_MONO: require("../assets/fonts/SpaceMono-Regular.ttf"),
          NUNITO_BLACK: require("../assets/fonts/NunitoSans-Black.ttf"),
          NUNITO_BLACK_ITALIC: require("../assets/fonts/NunitoSans-BlackItalic.ttf"),
          NUNITO_BOLD: require("../assets/fonts/NunitoSans-Bold.ttf"),
          NUNITO_BOLD_ITALIC: require("../assets/fonts/NunitoSans-BoldItalic.ttf"),
          NUNITO_EXTRABOLD: require("../assets/fonts/NunitoSans-ExtraBold.ttf"),
          NUNITO_EXTRABOLD_ITALIC: require("../assets/fonts/NunitoSans-ExtraBoldItalic.ttf"),
          NUNITO_EXTRALIGHT: require("../assets/fonts/NunitoSans-ExtraLight.ttf"),
          NUNITO_ITALIC: require("../assets/fonts/NunitoSans-Italic.ttf"),
          NUNITO_LIGHT: require("../assets/fonts/NunitoSans-Light.ttf"),
          NUNITO_LIGHT_ITALIC: require("../assets/fonts/NunitoSans-LightItalic.ttf"),
          NUNITO_REGULAR: require("../assets/fonts/NunitoSans-Regular.ttf"),
          NUNITO_SEMIBOLD: require("../assets/fonts/NunitoSans-SemiBold.ttf"),
          NUNITO_SEMIBOLD_ITALIC: require("../assets/fonts/NunitoSans-SemiBoldItalic.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
