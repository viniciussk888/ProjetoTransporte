import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

function Loading() {
  return (
    <View style={styles.container}>
         <ActivityIndicator
              size="large"
              animating={true}
              color='#fff'
            />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19062b",
    }
  });

export default Loading;
