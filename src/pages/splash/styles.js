import { StyleSheet } from "react-native";
import color from '../../assets/colors'
import font from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    justifyContent: "center",
    alignItems:'center',
    paddingHorizontal: 20,
  },
  LoadingIcon:{
    marginTop:50
  },
  TitleText: {
    textAlign: 'center',
    fontSize: 38,
    fontFamily: font.bold,
    color: "#fff"
  }
});

export default styles