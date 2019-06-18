import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { colors } from '~/styles';

const TabIcon = ({ tintColor }) => <Icon name="plus" size={20} color={tintColor} />;

export default class OperacaoCriarPost extends Component {
  
  state = { 
    region: null,

   };

  static navigationOptions = {
    tabBarIcon: TabIcon,
    title: 'Criar Post',
  };

  getLocation = async() => {
    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.tron.log({latitude, longitude})
      }, //sucesso
      () => {}, //erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    )

  }

  render() {
    return (
      <View>
        <Header title="Criar Post" goBack="Mandato" publicar />

        <View style={styles.container}>
          <View style={styles.thumb_post}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Icon name="image" size={50} color={colors.light} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Escrever uma legenda ..."
              placeholderTextColor={colors.light}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
            />
          </View>

          <View style={styles.thumb_post}>
            <TouchableOpacity
              style={styles.location}
              onPress={() => this.getLocation()}
            >
              <Icon name="map-marker" size={30} color={colors.danger} />
              <Text style={styles.text}>Adicionar localização atual</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
