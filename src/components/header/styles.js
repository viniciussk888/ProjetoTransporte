import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.bold,
    color: "#fff",
    fontSize: 20,
    lineHeight: 20,
    marginRight: "30%",
  },
});

export default styles;
