import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from '~/styles';

// screen
import Welcome from '~/pages/Welcome';
import Operacoes from '~/pages/Operacoes';
import Projetos from '~/pages/Projetos';
import CadastroUsuario from '~/pages/Usuario/Cadastro';
import CadastroOperacao from '~/pages/Operacoes/CadastroOperacao';
import OperacaoDetalhes from '~/pages/Operacoes/OperacaoDetalhes';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome: {
        screen: Welcome,
      },
      CadastroUsuario: {
        screen: CadastroUsuario,
      },
      CadastroOperacao: {
        screen: CadastroOperacao,
      },
      OperacaoDetalhes: {
        screen: OperacaoDetalhes,
      },
      User: createBottomTabNavigator(
        {
          Operacoes: {
            screen: Operacoes,
            navigationOptions: {
              title: 'Lista Operações',
            },
          },
          Projetos: {
            screen: Projetos,
            navigationOptions: {
              title: 'Projetos Internos',
            },
          },
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
    {
      initialRouteName: userLogged ? 'User' : 'Welcome',
    },
  ),
);

export default Routes;
