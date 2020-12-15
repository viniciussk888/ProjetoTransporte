import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afb7bd",
    paddingHorizontal: 20,
  },
  headerHomeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#afb7bd'
  },
  wellcomeText: {
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 5
  },
  cargasText: {
    fontFamily: 'Archivo_700Bold',
    marginBottom: 5
  },
  item: {
    backgroundColor: '#eb001b',
    margin: 5,
    borderRadius: 8,
    padding: 5
  },
  title: {
    fontSize: 10,
    color: '#fff'
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  },
  cardOrigin: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
  },
  cardDest: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'Archivo_700Bold',
  },
  cardInfo: {
    fontFamily: 'Poppins_600SemiBold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  cardInfoText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#fff',
    margin: 5
  },
  cardInfoTextDetail: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
    color: '#fff',
    margin: 5
  }
});

export default styles;
