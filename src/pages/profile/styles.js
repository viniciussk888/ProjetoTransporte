import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 40,
  },
  titleContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    color: '#fff',
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },
  buttonsContainer: {
    marginTop: 5,
    flexDirection: "column",
    padding: 10,
  },
  input: {
    borderRadius: 8,
    width: "100%",
    fontFamily: fonts.bold,
    fontSize: 16,
    height: 38,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  textSection: {
    color: '#fff',
    fontFamily: fonts.semiBold
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
    backgroundColor: "#fff",
    marginRight: 5,
  },
  PickerView: {
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  picker: {
    width: "100%",
    fontFamily: fonts.textPrimary,
    fontSize: 20,
    height: 40,
    backgroundColor: "#fff",
  },
  PickerView2: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginBottom: 40
  },
  picker2: {
    width: "100%",
    fontFamily: fonts.textPrimary,
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