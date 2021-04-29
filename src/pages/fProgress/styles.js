import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    justifyContent: "center",
    padding: 0,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.bold,
    color: "#fff"
  },
  fab: {
    backgroundColor:colors.yellow,
    position: 'absolute',
    margin: 0,
    right: 0,
    bottom: 0,
  },
});

export default styles;