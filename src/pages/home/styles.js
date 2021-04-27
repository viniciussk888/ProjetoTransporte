import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  headerHomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: colors.background,
  },
  wellcomeText: {
    color: '#fff',
    fontFamily: fonts.semiBold,
    marginBottom: 5
  },
  cargasText: {
    color: '#fff',
    fontFamily: fonts.bold,
    marginBottom: 5
  }
});

export default styles;
