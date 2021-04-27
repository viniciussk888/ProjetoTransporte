import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    fontFamily: fonts.textPrimary,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: colors.gray,
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
