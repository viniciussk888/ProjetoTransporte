import React from "react";

import { View, Text } from "react-native";

import MyTopTabs from "../../routes/TopTabs";

import styles from "./styles";

function Freight() {
  return (
    <>
      <View style={styles.container}>
        <MyTopTabs />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
      </View>
    </>
  );
}
export default Freight;
