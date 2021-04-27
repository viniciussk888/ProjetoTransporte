import { StyleSheet } from "react-native";
import color from '../../assets/colors'
import font from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: "center",
    padding: 40,
    paddingTop: 150,
  },
  titlePrimary: {
    fontFamily: font.bold,
    color: color.white,
    fontSize: 22,
    lineHeight: 25,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: font.textPrimary,
    color: color.white,
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 5,
  },
  textButton: {
    textAlign: "center",
    fontFamily: font.bold,
    color: color.white,
    fontSize: 14,
    lineHeight: 25,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleRegister: {
    fontFamily: font.semiBold,
    color: color.white,
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
    backgroundColor: color.gray,
    marginVertical: 10,
  },
  buttonSignin: {
    width: 250,
    marginTop: 30,
    backgroundColor:color.green,
    padding:20
  },
  buttonRegister: {
    width: 250,
    marginTop: 30,
    backgroundColor:color.yellow,
    padding:20
  },
});

export default styles;
