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
    minHeight: '27%',
    width: Dimensions.get("window").width,
    padding: 30,
    backgroundColor: "#19062b",
    flexDirection: 'column',
    alignItems: "flex-start",
  },
  contentTitle: {
    alignSelf: 'center',
  },
  textTitle: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,
    lineHeight: 25,
  },
  textCategory: {
    marginTop: 10,
    fontFamily: "Archivo_400Regular",
    color: "#fff",
    fontSize: 14,
    lineHeight: 25,
  },
  scrolCategorie: {
    flex: 1,
    padding: 5
  }
});

export default styles;
