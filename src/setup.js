//import * as Expo from 'expo';
import React, { Component } from 'react';
import { AppState } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import { View, Text } from './components/stb';
import Routes from './routes/';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isReady: false,
      appState: AppState
    };
    global.linkPressed = false;
    global.showModal = false;
  }
  // componentDidMount = () => {
  //   DeviceEventEmitter.addListener('ON_HOME_BUTTON_PRESSED', () => {
  //     this.showModal = true;
  //   });
  //   DeviceEventEmitter.addListener('ON_RECENT_APP_BUTTON_PRESSED', () => {
  //     this.showModal = true;
  //   });
  // };
  componentDidMount = () => {
    AppState.addEventListener('change', this._handleAppStateChange);
    SplashScreen.hide();
  };
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      if (global.showModal && !global.linkPressed) {
        let current = Actions.currentScene;
        if (current !== 'modalCore') {
          Actions.modalCore({ prev: current });
          this.showModal = false;
        }
      }
      global.linkPressed = false;
    } else {
      global.showModal = true;
    }
  };

  render() {
    return <Routes />;
  }
}
