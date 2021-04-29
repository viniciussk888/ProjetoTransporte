import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.green,
    width:250,
    height:270,
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 5,
    marginBottom:50
  },
  title: {
    fontFamily: fonts.semiBold,
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