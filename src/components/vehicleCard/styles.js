import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#eb001b',
    width:250,
    height:270,
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 5,
    marginBottom:50
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 10,
    color: "#fff",
    textShadowColor: '#000',
    textShadowOffset: {
      width: 5,
      height: 5
    },
  }
})

export default styles