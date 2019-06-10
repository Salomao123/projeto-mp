import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Image, Text, FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Header from '~/components/Header';

import FeedItem from './FeedItem';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

const OperacaoFeedResposta = ({ navigation }) => {
  const feedItems = [
    {
      id: 1,
      avatar_user: require('../../../../assets/img/avatar_user.jpg'),
      avatar_name: 'Salomão Batista',
      post_media: require('../../../../assets/img/item1.jpg'),
    },
    {
      id: 2,
      avatar_user: require('../../../../assets/img/avatar_user.jpg'),
      avatar_name: 'Salomão Batista',
      post_media: require('../../../../assets/img/item2.jpeg'),
    },
    {
      id: 3,
      avatar_user: require('../../../../assets/img/avatar_user.jpg'),
      avatar_name: 'Salomão Batista',
      post_media: require('../../../../assets/img/item3.jpeg'),
    },
  ];

  renderListItem = ({ item }) => <FeedItem feed={item} />;

  return (
    <View>
      <Header title="Feed Resposta" subTitle="Nome Operação" goBack="Mandato" />

      <FlatList
        data={feedItems}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    </View>
  );
};

OperacaoFeedResposta.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Feed',
};

OperacaoFeedResposta.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        subTitle: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default OperacaoFeedResposta;
