import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { View, FlatList, ActivityIndicator } from 'react-native';

import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import ProjetosItem from './ProjetosItem';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Projetos extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrgnizations();
  }

  loadOrgnizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@GOI:token');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <ProjetosItem projetos={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={this.loadOrgnizations}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Operações" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
