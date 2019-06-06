import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const MandadoItem = ({ item }) => (
  <TouchableOpacity onPress={() => alert('ainda nao implementado!')} style={styles.mandatoBox}>
    <Text style={styles.textDefault}>{item.nome}</Text>
    <Text style={styles.textDefault}>
      {item.alvo}
      {' '}
(CNPJ
      {item.cnpjCPF}
)
      {' '}
    </Text>
  </TouchableOpacity>
);

MandadoItem.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default MandadoItem;
