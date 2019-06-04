import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import Header from '~/components/Header'

import styles from './styles';

const Mandato = (operacao) => {
  console.log({operacao})
  return (
  <View style={styles.container}>
    <Header title="Mandatos" adicionar='mandado' goBack='User'/>

      <TouchableOpacity onPress={() => alert('ainda nao implementado!')} style={styles.mandatoBox}>
        <Text style={styles.textDefault}>Mandado de busca e apreensao N˚ 700000949357</Text>
        <Text style={styles.textDefault}>Portanova e Advogados Associados (CNPJ 04.578.683/0001-10) </Text>
      </TouchableOpacity>
  </View>
)};

export default Mandato;
