import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { colors } from '~/styles';

// screen
import Welcome from '~/pages/Welcome';
import Operacoes from '~/pages/Operacoes';
import Mandato from '~/pages/Mandato';
import Projetos from '~/pages/Projetos';
import CadastroUsuario from '~/pages/Usuario/Cadastro';
import CadastroOperacao from '~/pages/Operacoes/CadastroOperacao';
import OperacaoDetalhes from '~/pages/Operacoes/OperacaoDetalhes';
import OperacaoFeedResposta from '~/pages/Operacoes/OperacaoFeedResposta';
import OperacaoCriarPost from '~/pages/Operacoes/OperacaoFeedResposta/OperacaoCriarPost';
import OperacaoFeedUsers from '~/pages/Operacoes/OperacaoFeedResposta/OperacaoFeedUsers';
import MandadoCadastro from '~/pages/Mandato/MandadoCadastro';

// component

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
      Mandato: {
        screen: Mandato,
      },
      MandadoCadastro: {
        screen: MandadoCadastro,
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
      FeedOperacao: createBottomTabNavigator(
        {
          OperacaoFeedResposta: {
            screen: OperacaoFeedResposta,
          },
          OperacaoCriarPost: {
            screen: OperacaoCriarPost,
          },
          OperacaoFeedUsers: {
            screen: OperacaoFeedUsers,
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
