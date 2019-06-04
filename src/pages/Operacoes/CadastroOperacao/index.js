import React, { Component } from 'react';
import api from '~/services/api';

import {
  Text, View, TextInput, ActivityIndicator, TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import Header from '~/components/Header';

import { colors } from '~/styles';

export default class CadastroOperacao extends Component {
  state = {
    title: '',
    description: '',
    address: '',
    loading: false,
  };

  cadastroOperacao = async () => {
    const { title, description, address } = this.state;
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem('@GOI:token');

    this.setState({ loading: true });

    try {
      const response = await api.post(
        '/operacoes',
        {
          title,
          description,
          author: '5cd5c172bfbfe9147ba2f684',
          address,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      console.tron.log(response.data);

      navigation.navigate('User');
    } catch (err) {
      this.setState({ loading: false });
      console.tron.log(err);
    }
  };

  render() {
    const {
      title, description, address, loading,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Cadastro Operações" goBack="User" />

        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              keyboardType="default"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              placeholder="Título"
              underlineColorAndroid="transparent"
              value={title}
              onChangeText={text => this.setState({ title: text })}
            />

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Descrição"
              underlineColorAndroid="transparent"
              value={description}
              onChangeText={response => this.setState({ description: response })}
            />

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Endereço"
              underlineColorAndroid="transparent"
              value={address}
              onChangeText={response => this.setState({ address: response })}
            />

            <TouchableOpacity style={styles.button} onPress={this.cadastroOperacao}>
              {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
