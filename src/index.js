import '~/config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';

import React, { Component } from 'react';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChacked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@GOI:token');

    this.setState({
      userChacked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChacked, userLogged } = this.state;

    if (!userChacked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
