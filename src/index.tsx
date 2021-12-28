import React from "react";
import { StackNavigator } from "@navigator";
import { LogBox } from "react-native";

// THIRD PARTY IMPORTS
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// LOCAL IMPORTS
import { store, persistor } from "./reducers";

// LOCAL IMPORTS
import useCachedResources from "./hooks/useCachedResources";

export const App = () => {
  LogBox.ignoreLogs(["If you want to use Reanimated 2"]);
  LogBox.ignoreLogs(["Failed prop type:"]);
  LogBox.ignoreLogs(["Require cycle:"]);
  LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StackNavigator />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
};
