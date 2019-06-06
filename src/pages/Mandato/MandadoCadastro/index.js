import React, { Component } from 'react';
import api from '~/services/api';

import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { colors } from '~/styles';

import styles from './styles';

import Header from '~/components/Header';

class MandadoCasdastro extends Component {
  state = {
    loading: false,
    nome: '',
    numeroIdentificacao: '',
    alvo: '',
    cnpjCPF: '',
  };

  cadastrarMandado = async () => {
    const {
      nome, numeroIdentificacao, alvo, cnpjCPF,
    } = this.state;

    const token = await AsyncStorage.getItem('@GOI:token');

    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await api.post(
        '/mandados',
        {
          nome,
          numero: numeroIdentificacao,
          alvo,
          cnpjCPF,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      navigation.navigate('Mandato');
    } catch (err) {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      nome, numeroIdentificacao, alvo, cnpjCPF, loading,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Mandado Cadastro" goBack="Mandato" />

        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome do mandado"
              placeholderTextColor={colors.regular}
              value={nome}
              onChangeText={response => this.setState({ nome: response })}
            />

            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="Número de identificação"
              placeholderTextColor={colors.regular}
              value={numeroIdentificacao}
              onChangeText={response => this.setState({ numeroIdentificacao: response })}
            />

            <TextInput
              style={styles.input}
              placeholder="Alvo"
              placeholderTextColor={colors.regular}
              value={alvo}
              onChangeText={response => this.setState({ alvo: response })}
            />

            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="CNPJ/CPF"
              placeholderTextColor={colors.regular}
              value={cnpjCPF}
              onChangeText={response => this.setState({ cnpjCPF: response })}
            />

            <TouchableOpacity style={styles.buttonCadatro} onPress={this.cadastrarMandado}>
              {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Text style={styles.buttonTextCadastro}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default MandadoCasdastro;
