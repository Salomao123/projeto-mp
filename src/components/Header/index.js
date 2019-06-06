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
    adicionar: PropTypes.string,
    viewers: PropTypes.number,
    goBack: PropTypes.string,
    subTitle: PropTypes.string,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  goBack = (goBack, navigation) => {
    navigation.navigate(`${goBack}`);
  };

  render() {
    const {
      title, adicionar, navigation, viewers, goBack, subTitle, publicar,
    } = this.props;

    console.tron.log({ navigation });

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <View style={styles.left}>
          {goBack ? (
            <TouchableOpacity onPress={() => this.goBack(goBack, navigation)}>
              <Icon name="arrow-left" size={20} style={styles.icon} />
            </TouchableOpacity>
          ) : (
            <Text style={styles.title}>GO!</Text>
          )}
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text>{subTitle}</Text>}
        </View>

        <View style={styles.menu}>
          {(adicionar === 'operacoes') && (
            <TouchableOpacity onPress={() => navigation.navigate('CadastroOperacao')}>
              <Icon name="plus" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}

          {(adicionar === 'mandado') && (
            <TouchableOpacity onPress={() => navigation.navigate('MandadoCadastro')}>
              <Icon name="plus" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}

          {viewers && (
            <TouchableOpacity style={styles.eye} onPress={() => alert('ainda nao implementado!')}>
              <Text style={styles.title}>{viewers}</Text>
              <Icon name="eye" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}
          {publicar && (
            <TouchableOpacity onPress={() => alert('ainda nao implementado!')}>
              <Text style={styles.textPublicar}>publicar</Text>
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
