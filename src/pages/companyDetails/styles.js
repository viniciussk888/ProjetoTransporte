import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19062b",
    padding: 30,
  },
  logoContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  logo:{
      height:200,
      width:'100%',
      borderRadius:8,
      borderWidth:2,
      borderColor:"#fff"
  },
  textTitle: {
    marginTop: 5,
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    fontWeight:'bold',
    color: "#fff"
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#fff"
  },
  textFooter: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#fff"
  }
});

export default styles;