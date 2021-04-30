import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../assets/colors'
import * as Updates from 'expo-updates';
import LostConnection from "../../assets/animations/LostConnection.json";
import Lottie from "lottie-react-native";

export default function NoConnection() {
  return (
    <View style={styles.container}>
        <Lottie
          source={LostConnection}
          autoPlay
          loop
          resizeMode="contain"
          autoSize
       />
     <Text style={styles.text}>Sem conexão disponível</Text>
     <RectButton style={styles.button} onPress={async()=>{await Updates.reloadAsync()}}>
         <Text style={styles.text}>Tentar novamente</Text>
         </RectButton>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems:'center',
      padding: 0,
    },
    text: {
      marginTop: 5,
      fontSize: 16,
      color: "#fff",
      fontWeight:'bold'
    },
    button:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderRadius:8,
        backgroundColor:colors.green
    }
  });
