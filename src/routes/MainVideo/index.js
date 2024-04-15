/* @flow */
import React from 'react';
import { StyleSheet, Dimensions, ScrollView, AppState } from 'react-native';
import {
  Text,
  View,
  HR,
  Button,
  Color,
  VideoPlayer
} from '../../components/stb/index';
//import { Video } from 'expo';
import { Actions } from 'react-native-router-flux';

//import Vid from '../../assets/video/test.mp4';
import Vid from '../../assets/video/stb-video-updated.mp4';
import Header from '../../components/Header';
import subtitles from '../../assets/captions/main.json';

export default class HomePage extends React.Component {
  //hack so we can access the instance
  //since flux doesn't allow us to do so

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: 'test',
        mute: false,
        fullScreen: true,
        shouldPlay: false
      });
    });
  }

  componentDidMount = () => {
    AppState.addEventListener('change', this._handleAppStateChange);
  };

  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'inactive' || nextAppState === 'background') {
      this.stopVideo();
    }
  };

  stopVideo = async () => {
    if (this.refs.myVideo) {
      await this.refs.myVideo.stopVideo();
    }
  };

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay
    }));
  };
  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute
    }));
  };

  render() {
    homePageInstance = this;
    const { width, height } = Dimensions.get('window');
    return (
      <View flex safe background="black">
        <VideoPlayer
          source={Vid}
          paused={false}
          subtitle={subtitles}
          isFullScreen={true}
          resizeMode="contain"
          disableFullscreen
          onBack={() => {
            //this.stopVideo();
            Actions.pop();
          }}
          onLoadStart={() => {}}
          ref="myVideo"
          style={{
            width: '100%',
            zIndex: 1000
          }}
        />
      </View>
    );
  }
}
