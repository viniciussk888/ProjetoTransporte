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
    minHeight: "75%",
  },
  header: {
    flex: 1,
    minHeight: '25%',
    width: Dimensions.get("window").width,
    padding: 30,
    backgroundColor: "#afb7bd",
    flexDirection: 'column',
    alignItems: "flex-start",
  },
  contentTitle: {
    alignSelf: 'center',
  },
  textTitle: {
    fontFamily: "Archivo_700Bold",
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
  },
  textCategory: {
    marginTop: 10,
    fontFamily: "Archivo_400Regular",
    color: "#000",
    fontSize: 14,
    lineHeight: 25,
  },
});

export default styles;
