/* @flow */
import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

//custom components
import { SwipeBlock } from '../../components/Swipe/';
import {
  Text,
  View,
  Button,
  Icon,
  UUID,
  CustomModal
} from '../../components/stb/index';
import Instructions from '../../components/Modals/Instructions2';
import Header from '../../components/Header/';
// ----------------------------------- end components --------------------

//data
import slideKeys from './data';

export default class Content extends React.Component {
  stopAudio = async soundObject => {
    let promiseArray = _.map(slideKeys, function(slide) {
      let sound = slide.sound;
      if (sound.object) {
        return sound.object.unloadAsync();
      }
    });
    Promise.all(promiseArray);
  };
  onIndexChanged = () => {
    this?.stopAudio();
  };
  renderBlocks = () => {
    return slideKeys.map(slide => {
      return (
        <View style={{ marginBottom: 50 }} key={UUID.generate()}>
          <SwipeBlock data={slide} />
        </View>
      );
    });
  };

  render() {
    return (
      <View flex background="">
        <Header title="Bleeding - Other" />
        <Instructions />
        <Swiper showsButtons loop={false} onIndexChanged={this.onIndexChanged}>
          {this.renderBlocks()}
        </Swiper>
      </View>
    );
  }
}
