import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const ProjetosItem = ({ projeto }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: projeto.avatar_url }} />
    <Text style={styles.title}>{projeto.login}</Text>
  </View>
);

ProjetosItem.propTypes = {
  projeto: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default ProjetosItem;
