import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 0,
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: fonts.bold,
    color: "#fff",
    textShadowColor: '#000',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 10,
  },
  textRoute: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: "#fff"
  },
  containerRoute: {
    position: 'absolute',
    borderRadius: 8,
    padding: 3,
    backgroundColor: colors.red,
    top: 2,
    zIndex: 5,
  },
  mapContainer: {
    alignItems: 'center',
    width: "100%",
    height: 400,
    backgroundColor: "#fff"
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.background,
  },
  map: {
    alignItems: "flex-start",
    width: Dimensions.get("window").width,
    minHeight: "60%",
  },
  infoFrete: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;