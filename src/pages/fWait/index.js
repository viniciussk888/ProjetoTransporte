import React,{useState,useEffect} from 'react';
import { View, Text, ScrollView,Alert } from 'react-native';
import styles from "./styles";
import FreightCard from '../../components/freightCard';
import { useSelector } from 'react-redux';
import api from '../../services/api'
import { ActivityIndicator } from "react-native-paper";
import { FAB } from 'react-native-paper';

function Wait() {
  const [loading,setLoading] = useState(false)
  const user_id = useSelector((state) => state.id);
  const [freightInWait,setFreightInWait] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`,
    },
  };

  const [state, setState] = useState(false);

  async function getFreightInWait(){
    setLoading(true)
    setState(true);
    try {
      const response = await api.get(`user-negotiations/${user_id}`,config)
      setFreightInWait(response.data)
      setState(false)
      setLoading(false)
    } catch (error) {
      setState(false)
      setLoading(false)
      Alert.alert("ATENÇÃO",error)
    }
  }

  useEffect(()=>{
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
          <ActivityIndicator
              size="large"
              animating={loading}
              color='#fff'
            />
          }
      
      </ScrollView>
      <FAB
    style={styles.fab}
    loading={state}
    icon="autorenew"
    onPress={getFreightInWait}
  />
    </View>
    );
}

export default Wait;
