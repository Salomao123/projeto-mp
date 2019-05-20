import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { colors } from '~/styles';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    name: '',
    email: '',
    senha: '',
    error: false,
    loading: false,
  };

  sendUserToApi = async (name, email, senha) => {
    const user = await api.post('/usuarios', { name, email, senha });

    return user;
  };

  signUpUser = async () => {
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      const { name, email, senha } = this.state;

      const { data } = await this.sendUserToApi(name, email, senha);

      if (data) {
        navigation.navigate('Welcome', { sucesss: 'Usuário cadastrado com sucesso!' });
      }
    } catch (err) {
      console.tron.log({ err });
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const {
      name, email, senha, loading, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />

        <Text style={styles.title}>Cadastro de Usuário</Text>
        <Text style={styles.text}>Insira as informações corretas!</Text>

        {error && <Text style={styles.error}>Não foi possível cadastrar o Usuário!</Text>}

        <View style={styles.form}>
          <TextInput
            keyboardType="default"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome completo"
            underlineColorAndroid="transparent"
            value={name}
            onChangeText={text => this.setState({ name: text })}
          />

          <TextInput
            keyboardType="email-address"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Endereço de e-mail"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={text => this.setState({ email: text })}
          />

          <TextInput
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha"
            underlineColorAndroid="transparent"
            value={senha}
            onChangeText={text => this.setState({ senha: text })}
          />
          <TouchableOpacity style={styles.buttonCadatro} onPress={this.signUpUser}>
            {loading ? (
              <ActivityIndicator size={20} color={colors.white} />
            ) : (
              <Text style={styles.buttonText}>Cadastrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
