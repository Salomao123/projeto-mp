import React, { Component } from 'react';
import {
  Text, View, ScrollView, TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Header from '~/components/Header';

const usuarios = [
  { id: 1, nome: 'Salomão Batista' },
  { id: 2, nome: 'Paulo di Tarsio', responsavel: true },
  { id: 3, nome: 'John Mayk' },
  { id: 4, nome: 'Walace Tael' },
];

const OperacaoDetalhes = ({ navigation }) => {
  const {
    state: {
      params: { operacao },
    },
    navigate,
  } = navigation;

  console.tron.log(operacao);

  return (
    <ScrollView>
      <Header title="Operação Detalhes" viewers={15} goBack="User" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('FeedOperacao', { subTitle: operacao.title })}
      >
        <Text style={styles.buttonText}>Visualizar Feed Respostas</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>{operacao.title}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="star" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>
              Criado por
              {operacao.author.name}
            </Text>
          </View>

          <View style={styles.info}>
            <Icon name="star" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{operacao.description}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="star" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{operacao.address}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="star" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{operacao.createdAt}</Text>
          </View>

          <View style={styles.userListContent}>
            <Text style={styles.title}>Usuários Vinculados</Text>
            {usuarios.map(users => (
              <View key={users.id} style={styles.info}>
                <Icon name="user-circle" size={12} style={styles.infoIcon} />
                <Text style={styles.infoText}>
                  {users.nome}
                  {' '}
                  {users.responsavel && (
                    <Icon name="registered" size={12} style={styles.infoIcon} />
                  )}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

OperacaoDetalhes.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        operacao: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          author: PropTypes.shape({
            name: PropTypes.string,
          }),
          address: PropTypes.string,
          createdAt: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default OperacaoDetalhes;
