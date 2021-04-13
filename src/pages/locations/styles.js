import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    minHeight: "73%",
  },
  header: {
    flex: 1,
    minHeight: "27%",
    width: Dimensions.get("window").width,
    padding: 30,
    backgroundColor: "#19062b",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  contentTitle: {
    alignSelf: "center",
  },
  textTitle: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,
  },
  textCategory: {
    marginVertical: 10,
    fontFamily: "Archivo_400Regular",
    color: "#fff",
    fontSize: 14,
    lineHeight: 25,
  },
  avatar: {
    width: 38,
    height: 38
  },
  avatarCompanies: {
    width: 38,
    height: 38,
    borderRadius:8,
    borderWidth:2,
    borderColor:"#000"
  },
  callout: {
    alignItems: "center",
    width: 185,
  },
  Name: {
    fontFamily: "Archivo_700Bold",
    fontWeight: "bold",
    fontSize: 12,
  },
  Bio: {
    color: "#666",
    fontSize: 10,
    marginTop: 3,
  },
});

export default styles;
