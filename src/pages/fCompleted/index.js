import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import { useSelector } from 'react-redux';
import api from '../../services/api'
import { ActivityIndicator } from "react-native-paper";

import FreightCard from '../../components/freightCard'

function Completed() {
  const user_id = useSelector((state) => state.id);
  const [freightFinish,setFreightFinish] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  useEffect(()=>{
    async function getFreightFinish(){
      try {
        const response = await api.get(`finish-freights/${user_id}`,config)
        setFreightFinish(response.data)
      } catch (error) {
        alert(error)
      }
    }
    getFreightFinish()
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Fretes concluídos: {freightFinish.length}</Text>
      {freightFinish.length>0?
          freightFinish.map((freight)=>{
            return(
              <>
              <Text style={styles.text}>Nº {freight.id} - {freight.updated_at} </Text>
              <FreightCard key={freight.id} freight={freight}/>
              </>
            )  
          })
          :
          <ActivityIndicator
              size="large"
              animating={true}
              color='#fff'
            />
          }
      
      </ScrollView>
    </View>
    );
}

export default Completed;
