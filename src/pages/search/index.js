import React,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';
import { ActivityIndicator } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import Header from '../../components/header';
import api from '../../services/api'
import colors from '../../assets/colors';

function Search() {

  const [city,setCity] = useState('');
  const [freights,setFreights] = useState([])

  async function searchFreights(){
    setLoading(true)
    setFreights([])
    if(city===""||city===null){
      setLoading(false)
      return alert("Digite uma cidade para busca!")
    }
    try {
      const response = await api.post('search-freights',{
        city
      })
      if(response.status===204){
        setLoading(false)
        return alert("Nenhum frete encontrado para esta localidade!")
      }
      setFreights(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <>
    <Header routeToBack="Main" title="Procure por fretes"/>
    <View style={styles.container}>
      <Searchbar
    placeholder="Digite sua busca..."
    onChangeText={(text) => setCity(text)}
    onBlur={searchFreights}
    value={city}
    />
    <Text style={styles.text}>Busque pelo nome da cidade de origem</Text>
      <ScrollView>
      {freights.length>0?
          freights.map((freight)=>{
            return(
              <FreightCard key={freight.id} freight={freight}/>
            )  
          })
          :
          <ActivityIndicator
              size="large"
              animating={true}
              color={colors.white}
            />
          }
      </ScrollView>
    </View>
    </>
    );
}

export default Search;
