import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import { useSelector } from 'react-redux';
import api from '../../services/api'
import Loading from '../../components/loading'

import FreightCard from '../../components/freightCard'

function Completed() {
  const user_id = useSelector((state) => state.id);
  const [loading,setLoading] = useState(true)
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
        setLoading(false)
      } catch (error) {
        setLoading(false)
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
              <Text style={styles.text}>Nº {freight.id}</Text>
              <FreightCard key={freight.id} freight={freight}/>
              </>
            )  
          })
          :
          <Loading loading={loading}/>
          }
      
      </ScrollView>
    </View>
    );
}

export default Completed;
