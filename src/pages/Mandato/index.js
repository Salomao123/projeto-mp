import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import Header from '~/components/Header'

import styles from './styles';

const Mandato = (operacao) => {
  console.log({operacao})
  return (
  <View style={styles.container}>
    <Header title="Mandatos" goBack='User'/>

      <TouchableOpacity onPress={() => alert('ainda nao implementado!')} style={styles.mandatoBox}>
        <Text>Nome do Mandato</Text>
        <Text>Descricao do mandato</Text>
      </TouchableOpacity>

  </View>
)};

export default Mandato;
