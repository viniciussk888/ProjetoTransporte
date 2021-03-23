import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19062b",
    alignItems: 'center',
    padding: 0,
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    textShadowColor: '#9999',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 10,
  },
  textRoute: {
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
    color: "#fff"
  },
  containerRoute: {
    position: 'absolute',
    borderRadius: 8,
    padding: 3,
    backgroundColor: "#eb001b",
    top: 2,
    zIndex: 5,
  },
  mapContainer: {
    alignItems: 'center',
    width: "100%",
    height: 400,
    marginBottom: -10,
    backgroundColor: "#fff"
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#19062b"
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