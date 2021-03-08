import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afb7bd",
    padding: 10,
  },
  sectionText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 18,
    marginVertical: 10,
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
  inputShort: {
    borderRadius: 8,
    width: "50%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginRight: 5,
  },
  PickerView: {
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  picker: {
    width: "100%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 40,
    backgroundColor: "#fff",
  },
  PickerView2: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#000",
  },
  picker2: {
    width: "100%",
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 40,
    backgroundColor: "#fff",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonShort: {
    flexDirection: "row",
  },
});

export default styles;
