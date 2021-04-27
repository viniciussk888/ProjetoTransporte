import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop:80,
  },
  sectionText: {
    fontFamily: fonts.bold,
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
    fontFamily: fonts.textPrimary,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: colors.gray,
    marginVertical: 5,
  },
  inputShort: {
    borderRadius: 8,
    width: "50%",
    fontFamily: fonts.textPrimary,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: colors.gray,
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
    fontFamily: fonts.textPrimary,
    fontSize: 20,
    height: 40,
    backgroundColor: colors.gray,
  },
  PickerView2: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#000",
  },
  picker2: {
    width: "100%",
    fontFamily: fonts.textPrimary,
    fontSize: 20,
    height: 40,
    backgroundColor: colors.gray,
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
