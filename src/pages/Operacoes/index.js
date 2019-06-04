import React, { Component } from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import PropTypes from 'prop-types';

import OperacoesItem from './OperacoesItem';

import api from '~/services/api';

import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const token = await AsyncStorage.getItem('@GOI:token');

    const { data } = await api.get('/operacoes', {
      headers: { Authorization: `Bearer ${token}` },
    });

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => (
    <OperacoesItem navigation={this.props.navigation} operacao={item} />
  );

  renderList = (data) => {
    const { docs } = data;

    const { refreshing } = this.state;

    return (
      <FlatList
        data={docs}
        keyExtractor={item => String(item._id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { data, loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Operações" adicionar navigation={this.props.navigation} drawer />
        {loading ? <ActivityIndicator size={24} /> : this.renderList(data)}
      </View>
    );
  }
}
