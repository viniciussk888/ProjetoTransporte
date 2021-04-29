import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";

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
    paddingTop: 40,
    paddingBottom:20,
    backgroundColor: colors.background,
  },
  wellcomeText: {
    color: "#fff",
    fontFamily: fonts.semiBold,
    marginBottom: 5,
    marginLeft: 10,
  },
  weatherCard: {
    flexDirection:'column',
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.blue_light,
    borderRadius: 8,
  },
  weatherNow:{
    flexDirection:'row',
    alignItems:'center',
  },
  weatherText: {
    marginLeft:5,
    color: colors.background,
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  cargasText: {
    color: "#fff",
    fontFamily: fonts.bold,
    marginBottom: 5,
  },
});

export default styles;
