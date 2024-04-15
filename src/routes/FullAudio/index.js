/* @flow */
import React from 'react';
import { StyleSheet, Dimensions, ScrollView, AppState } from 'react-native';
import {
  Text,
  View,
  Link,
  Icon,
  HR,
  Button,
  Color,
  VideoPlayer
} from '../../components/stb/index';
//import { Video } from 'expo';
import { Actions } from 'react-native-router-flux';

//import Vid from '../../assets/video/test.mp4';
import Vid from '../../assets/video/apply-full-audio.mp4';
import Header from '../../components/Header';
import subtitles from './data';

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

    let YOUR_ID = '866762270193956';
    let THE_URL_YOU_WANT_TO_SHARE =
      'https://s3.amazonaws.com/stop-the-bleed/share-full-audio.html';
    let THE_LANDING_URL_AFTER_SHARING = 'https://facebook.com';
    let link = `https://www.facebook.com/dialog/share?app_id=${YOUR_ID}&display=popup&href=${THE_URL_YOU_WANT_TO_SHARE}&redirect_uri=${THE_LANDING_URL_AFTER_SHARING}`;

    return (
      <View flex safe background="black">
        <VideoPlayer
          source={Vid}
          paused={false}
          subtitle={subtitles}
          isFullScreen={true}
          playInBackground={false}
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
        <View vCenter hCenter row style={{ backgroundColor: '#204F70' }}>
          <View>
            <Icon color="white" name="facebook-f" />
          </View>
          <View>
            <Link
              textStyles={{
                textAlign: 'center',
                textDecorationLine: 'none',
                padding: 15,
                color: 'white'
              }}
              link={link}
            >
              Share to Facebook
            </Link>
          </View>
        </View>
      </View>
    );
  }
}
