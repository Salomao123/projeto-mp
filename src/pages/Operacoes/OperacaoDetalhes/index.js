import React, { Component } from 'react';
import {
  Text, View, ScrollView, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import Header from '~/components/Header';

const usuarios = [
  { id: 1, nome: 'Salomão Batista' },
  { id: 2, nome: 'Paulo di Tarsio', responsavel: true },
  { id: 3, nome: 'John Mayk' },
  { id: 4, nome: 'Walace Tael' },
];

export default class OperacaoDetalhes extends Component {
  state = {
    teste: '',
  };

  render() {
    return (
      <ScrollView>
        <Header title="Operação Detalhes" viewers={15} />

        <TouchableOpacity style={styles.button} onPress={() => alert('ainda nao implementado!')}>
          <Text style={styles.buttonText}>Visualizar Feed Respostas</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.title}>Operação Lava Jato</Text>

          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Icon name="star" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>Criado por Salomão Batista</Text>
            </View>

            <View style={styles.info}>
              <Icon name="star" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>
                A Operação Lava Jato é um conjunto de investigações em andamento pela Polícia
                Federal do Brasil, que cumpriu mais de mil mandados de busca e apreensão, de prisão
                temporária, de prisão preventiva e de condução coercitiva, visando apurar um esquema
                de lavagem de dinheiro que movimentou bilhões de reais em propina.
                {' '}
              </Text>
            </View>
            <View style={styles.info}>
              <Icon name="star" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>
                Rua Raimundo Nunes da Cruz, 666, Novo Horizonte, Amapá-Brasil
                {' '}
              </Text>
            </View>
            <View style={styles.info}>
              <Icon name="star" size={12} style={styles.infoIcon} />
              <Text style={styles.infoText}>Criada há 4 dias atrás</Text>
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
  }
}
