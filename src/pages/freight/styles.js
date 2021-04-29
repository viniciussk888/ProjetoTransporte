import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    //justifyContent: "center",
    padding: 40
  },
  cargasText: {
    marginTop: 5,
    color: '#fff',
    fontFamily: fonts.bold,
    marginBottom: 5
  },
});

export default styles;