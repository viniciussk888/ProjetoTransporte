import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19062b",
    paddingHorizontal: 20,
  },
  headerHomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#19062b'
  },
  wellcomeText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 5
  },
  cargasText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    marginBottom: 5
  }
});

export default styles;
