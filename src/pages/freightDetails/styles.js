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
    marginBottom: -30,
    backgroundColor: "#fff"
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#19062b"
  },
  map: {
    alignItems: "flex-start",
    width: Dimensions.get("window").width,
    minHeight: "60%",
  }
});

export default styles;