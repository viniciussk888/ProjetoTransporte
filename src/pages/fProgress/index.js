import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';
import { useSelector } from 'react-redux';
import api from '../../services/api'
import Loading from '../../components/loading'

function Progress() {
  const user_id = useSelector((state) => state.id);
  const [loading,setLoading] = useState(true)
  const [freightInProgress,setFreightInProgress] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  useEffect(()=>{
    async function getFreightInProgress(){
      try {
        const response = await api.get(`user-freights/${user_id}`,config)
        setFreightInProgress(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        alert(error)
      }
    }
    getFreightInProgress()
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Fretes em andamento: {freightInProgress.length}</Text>
      {freightInProgress.length>0?
          freightInProgress.map((freight)=>{
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

export default Progress;
