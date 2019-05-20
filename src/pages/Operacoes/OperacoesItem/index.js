import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const OperacaoItem = ({ operacao }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{operacao.title}</Text>

    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon name="star" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{operacao.description}</Text>
      </View>
    </View>
  </View>
);

OperacaoItem.propsTypes = {
  operacao: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default OperacaoItem;
