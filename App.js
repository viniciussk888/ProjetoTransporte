import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";
import { Provider as PaperProvider } from "react-native-paper";
//redux
import { store, persistor } from "./src/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PaperProvider>
              <AppStack />
              <StatusBar style="light" />
            </PaperProvider>
          </PersistGate>
        </ReduxProvider>
      </>
    );
  }
}
