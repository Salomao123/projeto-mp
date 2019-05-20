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
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    password: '',
    loading: false,
    error: false,
    sucess: false,
  };

  checkUserExists = async (username) => {
    const user = await api.post('/login', { email: username });

    return user;
  };

  saveUser = async (token) => {
    await AsyncStorage.setItem('@GOI:token', token);
  };

  handlerCadastro = () => {
    const { navigation } = this.props;

    navigation.navigate('CadastroUsuario');
  };

  singIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      const { data } = await this.checkUserExists(username);
      const { token } = data;
      await this.saveUser(token);
      navigation.navigate('User');
    } catch (err) {
      console.tron.log({ err });
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const {
      username, password, loading, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />

        <Text style={styles.title}>Bem-Vindo ao GOI</Text>
        <Text style={styles.subTitle}>Gerenciamento de Operações Internas</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informa seu usuário e senha.
        </Text>

        {error && <Text style={styles.error}>Usuário ou Senha inválidos!</Text>}

        <View style={styles.form}>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TextInput
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha"
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={response => this.setState({ password: response })}
          />

          <TouchableOpacity style={styles.button} onPress={this.singIn}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCadatro} onPress={this.handlerCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
