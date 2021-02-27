import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afb7bd",
    padding: 20,
  },
  buttonsContainer: {
    marginTop: 5,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderRadius: 8,
    width: "100%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  termosContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
