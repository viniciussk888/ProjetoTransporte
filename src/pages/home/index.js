import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, SafeAreaView, Alert } from "react-native";
import {
  FontAwesome
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FreightCard from '../../components/freightCard'
import Loading from '../../components/loading'
import styles from "./styles";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import api from '../../services/api'


export default function Home() {
  const {navigate} = useNavigation();

  const [freights,setFreights] = useState([])
  const [messageNoFreigths,setMessageNoFreigths] = useState('')
  const [loading,setLoading] = useState(true)
  const user_id = useSelector((state) => state.id);

  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  function getSimpleName(fullName) {
    const name = fullName.split(" ");
    const firstName = name[0];
    return firstName;
  }

  function navigateToSearch(){
    navigate("search");
  }

  useEffect(()=>{
    async function getFreights(){
      try {
      const lat =  await AsyncStorage.getItem("latitude")
      const long = await AsyncStorage.getItem("longitude")

        const response = await api.post('region-freights',{
          latitude:lat,
          longitude:long
        },config)
        if(response.status===204){
          setFreights([])
          setLoading(false)
          return setMessageNoFreigths("Nenhum frete encontrado para região!")
        }
        setFreights(response.data)
        setMessageNoFreigths("")
      } catch (error) {
        console.log(error)
      }
    }
    getFreights()
  },[])

  useEffect(()=>{
    async function checkStatus(){
      const response = await api.get(`users/${user_id}`,config)
      if(response.data.status==='AGUARDANDO'){
       return Alert.alert("ATENÇÂO","Seus dados cadastrais aindam não foram confirmados! aguarde aprovação para poder iniciar fretes.")
      }
    }
    checkStatus()
  },[])
  

  return (
    <>
      <View style={styles.headerHomeContainer}>
        <Text style={styles.wellcomeText}>
          Bem vindo, {getSimpleName(useSelector((state) => state.name)||"Usuário")}
        </Text>
        <View style={{flexDirection:"column",alignItems:'center'}}>
        <FontAwesome onPress={navigateToSearch} name="search" size={26} color="#fff" />
        <Text style={{fontSize:12,color:"#fff",fontFamily:"Poppins_600SemiBold"}}>Buscar fretes</Text>
        </View>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cargasText}>Cargas disponíveis na região</Text>
          <Text style={styles.cargasText}>Total: {freights.length}</Text>
        </View>
        
        <ScrollView>
        {messageNoFreigths?<Text style={{marginTop:20,color:"#fff",marginLeft:50}}>{messageNoFreigths}</Text>:null}
          {freights.length>0?
          freights.map((freight)=>{
            return(
              <FreightCard key={freight.id} freight={freight}/>
            )  
          })
          :
          <Loading loading={loading}/>
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
