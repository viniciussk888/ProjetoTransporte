import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Header from "../../components/header";

export default function CompanyDetails({ route }) {
  const company = route.params.company;

  return (
    <>
      <Header routeToBack="Main" title="Dados do parceiro" />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={{uri:company.imageURL}} />
        </View>

        <View style={{alignItems:'center'}}>
            <Text style={styles.textTitle}>{company.name}</Text>
            <Text style={styles.text}>{company.description}</Text>
        </View>

        <View style={{marginTop:30}}>
        <Text style={styles.textTitle}>Promoções:</Text>
        <Text style={styles.text}>Adesão gratis até junho</Text>
        </View>

        <View style={{marginTop:10}}>
        <Text style={styles.textTitle}>Endereço:</Text>
        <Text style={styles.text}>{company.adress}</Text>
        <Text style={styles.text}>{company.city}-{company.uf}</Text>
        </View>

        <View style={{marginTop:10}}>
        <Text style={styles.textTitle}>Contato:</Text>
        <Text style={styles.text}>{company.phone}</Text>
        </View>

        <View style={{marginTop:20,alignItems:'center'}}>
        <Text style={styles.textFooter}>Nesta empresa você tem desconto garantido atraves de nosso sistema de parceiria, basta apresentar nosso app!</Text>
        </View>
      </View>
    </>
  );
}
