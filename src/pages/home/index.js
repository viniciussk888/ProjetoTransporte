import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FreightCard from "../../components/freightCard";
import { ActivityIndicator } from "react-native-paper";
import styles from "./styles";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";
import weatherApi from '../../services/weather'

export default function Home() {
  const { navigate } = useNavigation();
  const [image] = useState(useSelector((state) => state.profileURL)||"none");
  const [loading,setLoading] = useState(false)
  const [freights, setFreights] = useState([]);
  const [messageNoFreigths, setMessageNoFreigths] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const user_id = useSelector((state) => state.id);

  const [currentWeather,setCurrentWeather] = useState("...")
  const [currentTemp,setCurrentTemp] = useState(0);
  const [tomorrowWeather,setTomorrowtWeather] = useState("...")
  const [tomorrowTemp,setTomorrowTemp] = useState(0);
  const [afterTomorrowWeather,setAfterTomorrowtWeather] = useState("...")
  const [afterTomorrowTemp,setAfterTomorrowTemp] = useState(0);

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

  function navigateToSearch() {
    navigate("search");
  }

  useEffect(() => {
    async function getFreights() {
      setLoading(true)
      try {
        const lat = await AsyncStorage.getItem("latitude");
        const long = await AsyncStorage.getItem("longitude");
        const city = await AsyncStorage.getItem("city");
        const uf = await AsyncStorage.getItem("uf");
        setCity(city);
        setUf(uf);

        const response = await api.post(
          "region-freights",
          {
            latitude: lat,
            longitude: long,
          },
          config
        );
        if (response.status === 204) {
          setFreights([]);
          setLoading(false)
          return setMessageNoFreigths("Nenhum frete encontrado para região!");
        }
        setFreights(response.data);
        setMessageNoFreigths("");
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getFreights();
  }, []);

  useEffect(() => {
    async function checkStatus() {
      const response = await api.get(`users/${user_id}`, config);
      if (response.data.status === "AGUARDANDO") {
        return Alert.alert(
          "ATENÇÂO",
          "Seus dados cadastrais aindam não foram confirmados! aguarde aprovação para poder iniciar fretes."
        );
      }
    }
    checkStatus();
  }, []);

  useEffect(() => {
    async function getWeather(){
      const lat = await AsyncStorage.getItem("latitude");
      const long = await AsyncStorage.getItem("longitude");
      try {
        const response = await weatherApi.get(`onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&lang=pt_br&appid=2a2cc5de850aa859f11813f774fb319a`)
        setCurrentWeather(response.data.current.weather[0].description)
        setCurrentTemp(response.data.current.temp-273.15)
        setTomorrowtWeather(response.data.daily[0].weather[0].description)
        setTomorrowTemp(response.data.daily[0].temp.day-273.15)
        setAfterTomorrowtWeather(response.data.daily[1].weather[0].description)
        setAfterTomorrowTemp(response.data.daily[1].temp.day-273.15)
      } catch (error) {
        console.log({fail:error})
      }
    }
    getWeather()
  }, []);

  return (
    <>
      <SafeAreaView style={styles.headerHomeContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: image }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              borderColor: "#fff",
              borderWidth: 1,
            }}
          />
          <Text style={styles.wellcomeText}>
            Bem vindo,{"\n"}
            {getSimpleName(useSelector((state) => state.name) || "Usuário")}
          </Text>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <FontAwesome
            onPress={navigateToSearch}
            name="search"
            size={26}
            color="#fff"
          />
          <Text
            style={{
              fontSize: 12,
              color: "#fff",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Buscar fretes
          </Text>
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.cargasText}>Previsão do tempo para região</Text>
        <View style={styles.weatherCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View style={styles.weatherNow}>
              <Ionicons name="location" size={18} color="#000" />
              <Text style={styles.weatherText}>{city + "-" + uf}</Text>
            </View>
            <View style={styles.weatherNow}>
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={20}
                color="black"
              />
              <Text style={styles.weatherText}>Hoje {currentTemp.toPrecision(3)}°{"\n"}{currentWeather}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View style={styles.weatherNow}>
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={20}
                color="black"
              />
              <Text style={styles.weatherText}>Amanhã {tomorrowTemp.toPrecision(3)}°{"\n"}{tomorrowWeather}</Text>
            </View>
            <View style={styles.weatherNow}>
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={20}
                color="black"
              />
              <Text style={styles.weatherText}>Depois de amanhã {afterTomorrowTemp.toPrecision(3)}°{"\n"}{afterTomorrowWeather}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={styles.cargasText}>Cargas disponíveis na região</Text>
          <Text style={styles.cargasText}>Total: {freights.length}</Text>
        </View>

        <ScrollView>
          {messageNoFreigths ? (
            <Text style={{ marginTop: 20, color: "#fff", marginLeft: 50 }}>
              {messageNoFreigths}
            </Text>
          ) : null}
          {freights.length > 0 ? (
            freights.map((freight) => {
              return <FreightCard key={freight.id} freight={freight} />;
            })
          ) : (
            <ActivityIndicator
              size="large"
              animating={loading}
              color='#fff'
            />
          )}
        </ScrollView>
      </View>
    </>
  );
}
