import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const {
      title, adicionar, navigation, viewers,
    } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <View style={styles.left}>
          <TouchableOpacity onPress={() => alert('ainda nao implementado!')}>
            <Icon name="bars" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.menu}>
          {adicionar && (
            <TouchableOpacity onPress={() => navigation.navigate('CadastroOperacao')}>
              <Icon name="plus" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}

          {viewers && (
            <TouchableOpacity style={styles.eye} onPress={() => alert('ainda nao implementado!')}>
              <Text style={styles.title}>{viewers}</Text>
              <Icon name="eye" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={this.signOut}>
            <Icon name="sign-out" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
