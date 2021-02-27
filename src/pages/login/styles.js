import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19062b",
    alignItems: "center",
    alignContent: 'center',
    padding: 40,
  },
  banner: {
    width: "10%",
    resizeMode: "contain",
  },
  titlePrimary: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Archivo_400Regular",
    color: "#fff",
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleRegister: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
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
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  buttonSignin: {
    width: 250,
    marginTop: 5,
  },
  buttonRegister: {
    marginTop: 10,
  },
});

export default styles;
