import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon, TitleText } from "./styles";
//import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";

//import Api from '../../Api';
//import { UserContext } from '../../contexts/UserContext';

import LogoApp from "../../assets/images/logo-transp.svg";

export default function Splash() {
  //const {dispatch: userDispatch} = useContext(UserContext); //dispatch(renomeado para userDispatch) constante para enviar informações para Context
  const navigation = useNavigation();

  useEffect(() => {
    // const checkToken = async () => {
    //   const token = await AsyncStorage.getItem('token')
    //   if (token) {
    //     let res = await Api.checkToken(token)
    //     if (res.token) {

    //       await AsyncStorage.setItem('token', res.token) //Salva token no async storage

    //       userDispatch({
    //         type: 'setAvatar', //ação definida no reducer
    //         payload: {
    //           avatar: res.data.avatar //avatar que será salvo no context
    //         }
    //       })

    //       navigation.reset({ //impede usuário voltar para tela login
    //         routes: [{
    //           name: 'MainTab'
    //         }]
    //       })

    //     } else {
    //       navigation.navigate('SignIn')
    //     }
    //   } else {
    //     navigation.navigate('SignIn')
    //   }
    // }
    // checkToken()
    splash();
  }, []);

  function splash() {
    setTimeout(() => {
      navigation.navigate("login");
    }, 2000);
  }

  return (
    <Container>
      <LogoApp width="100%" height="260" />
      <TitleText>Transporta Ai!</TitleText>
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
}
