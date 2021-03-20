import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

function Loading(props) {
  return (
    <View style={styles.container}>
         <ActivityIndicator
              size="large"
              animating={props.loading}
              color='#fff'
            />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    marginTop:200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19062b",
    }
  });

export default Loading;
