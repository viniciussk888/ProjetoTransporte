import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: fonts.bold,
    color: "#fff"
  }
});

export default styles;