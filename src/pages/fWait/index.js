import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';
import { useSelector } from 'react-redux';
import api from '../../services/api'
import Loading from '../../components/loading'

function Wait() {
  const user_id = useSelector((state) => state.id);
  const [loading,setLoading] = useState(true)
  const [freightInWait,setFreightInWait] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  useEffect(()=>{
    async function getFreightInWait(){
      try {
        const response = await api.get(`user-negotiations/${user_id}`,config)
        setFreightInWait(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        alert(error)
      }
    }
    getFreightInWait()
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Aguardando aprovação: {freightInWait.length}</Text>
      {freightInWait.length>0?
          freightInWait.map((freight)=>{
            return(
              <FreightCard key={freight.id} freight={freight}/>
            )  
          })
          :
          <Loading loading={loading}/>
          }
      
      </ScrollView>
    </View>
    );
}

export default Wait;
