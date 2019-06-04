import React from 'react';

import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { colors, metrics } from '~/styles';

import styles from './styles';

import Header from '~/components/Header';

const MandadoCasdastro = () => (
  <View style={styles.container}>
    <Header title="Mandado Cadastro" goBack="Mandato" />

    <View style={styles.content}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Nome do mandado' placeholderTextColor={colors.regular} />

        <TextInput style={styles.input} placeholder='Numero do mandado'  placeholderTextColor={colors.regular}/>

        <TextInput style={styles.input} placeholder='Alvo'  placeholderTextColor={colors.regular}/>

        <TextInput style={styles.input} placeholder='CNPJ'  placeholderTextColor={colors.regular}/>

        <TouchableOpacity style={styles.buttonCadatro} onPress={() => alert('ainda nao implementado!')}>
          <Text style={styles.buttonTextCadastro}>Cadastrar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  </View>
);

export default MandadoCasdastro;
