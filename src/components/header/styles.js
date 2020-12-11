import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    backgroundColor: '#eb001b'
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
    marginVertical: 5
  },
  header: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: 10
  }
})

export default styles