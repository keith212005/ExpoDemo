import React from "react";
import { StackNavigator } from "@navigator";
import { LogBox } from "react-native";

// THIRD PARTY IMPORTS
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

// LOCAL IMPORTS
import useCachedResources from "./hooks/useCachedResources";

export const App = () => {
  LogBox.ignoreLogs(["If you want to use Reanimated 2"]);
  LogBox.ignoreLogs(["Failed prop type:"]);
  LogBox.ignoreLogs(["Require cycle:"]);
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StackNavigator />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};
