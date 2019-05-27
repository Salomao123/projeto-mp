import React from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';

// import { Container } from './styles';
const TabIcon = ({ tintColor }) => <Icon name="user-circle" size={20} color={tintColor} />;

const OperacaoFeedUsers = () => (
  <View>
    <Header title="Membros" goBack="User" />
    <Text>Membros que ja responderam!</Text>
  </View>
);
OperacaoFeedUsers.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Membros',
};

export default OperacaoFeedUsers;
