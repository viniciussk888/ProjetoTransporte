import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    minHeight: "73%",
  },
  header: {
    flex: 1,
    minHeight: "27%",
    width: Dimensions.get("window").width,
    padding: 30,
    backgroundColor: colors.background,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  contentTitle: {
    alignSelf: "center",
  },
  textTitle: {
    fontFamily: fonts.bold,
    color: "#fff",
    fontSize: 16,
  },
  textCategory: {
    marginVertical: 10,
    fontFamily: fonts.textPrimary,
    color: "#fff",
    fontSize: 14,
    lineHeight: 25,
  },
  avatar: {
    width: 38,
    height: 38
  },
  avatarCompanies: {
    width: 38,
    height: 38,
    borderRadius:8,
    borderWidth:2,
    borderColor:"#000"
  },
  callout: {
    alignItems: "center",
    width: 185,
  },
  Name: {
    fontFamily: fonts.bold,
    fontSize: 12,
  },
  Bio: {
    color: "#666",
    fontSize: 10,
    marginTop: 3,
  },
});

export default styles;
