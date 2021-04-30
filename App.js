import { StatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
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
import * as Network from 'expo-network';
import NoConnection from './src/components/noConnection'
import AppStack from "./src/routes/AppStack";
import { Provider as PaperProvider } from "react-native-paper";
//redux
import { store, persistor } from "./src/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [isConnected,setIsConnected] = useState(true)
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useEffect(async()=>{
    const connected = await Network.getNetworkStateAsync().isInternetReachable();
    setIsConnected(connected)
  },[isConnected])

  if(!isConnected){
    return(
      <NoConnection />
    )
  }
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
