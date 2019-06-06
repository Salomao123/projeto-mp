import React, { Component } from 'react';
import api from '~/services/api';

import {
  View, Text, TouchableOpacity, ScrollView, FlatList,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Header from '~/components/Header';

import styles from './styles';

import MandadoItem from './MandadoItem';

class Mandato extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getMandados();
  }

  getMandados = async () => {
    const token = await AsyncStorage.getItem('@GOI:token');
    const response = await api.get('/mandados', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    this.setState({ data: response.data });
  };

  renderItem = ({ item }) => <MandadoItem item={item} />;

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Mandatos" adicionar="mandado" goBack="User" />

        {data.length ? (
          <FlatList
            data={data}
            keyExtractor={item => String(item._id)}
            renderItem={this.renderItem}
          />
        ) : (
          <View style={styles.warnning}>
            <Text style={styles.textWarnning}>Nunhum mandado criado!</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Mandato;
