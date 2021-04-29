import { StyleSheet } from "react-native";
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 30,
  },
  logoContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  logo:{
      height:160,
      width:'80%',
      borderRadius:8,
      borderWidth:2,
      borderColor:"#fff"
  },
  textTitle: {
    marginTop: 5,
    fontSize: 24,
    fontFamily: fonts.bold,
    color: "#fff"
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.textSecondary,
    color: "#fff"
  },
  textFooter: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: fonts.textSecondary,
    color: "#fff"
  }
});

export default styles;