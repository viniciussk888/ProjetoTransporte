import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afb7bd",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  titlePrimary: {
    fontFamily: "Archivo_700Bold",
    color: "#000",
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_400Regular",
    color: "#000",
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  titleRegister: {
    fontFamily: "Archivo_700Bold",
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 5,
  },
  input: {
    borderRadius: 8,
    width: 250,
    fontFamily: "Archivo_400Regular",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  buttonRegister: {
    marginTop: 10,
  },
});

export default styles;
