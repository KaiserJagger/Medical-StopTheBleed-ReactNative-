/* @flow */
import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

//custom components
import { SwipeBlock } from '../../components/Swipe/';
import {
  Text,
  View,
  Button,
  HR,
  Icon,
  UUID,
  CustomModal
} from '../../components/stb/index';
import Header from '../../components/Header/';
import Instructions from '../../components/Modals/Instructions2';

// ----------------------------------- end components --------------------

import PDF from '../../assets/documents/jit.pdf';

//data
import slideKeys from './data';

export default class Content extends React.Component {
  static instance;
  static onExit3 = () => {
    this.instance?.stopAudio();
  };
  constructor(props) {
    super(props);
    instance = this;
    this.refsArray = [];
  }
  stopAudio = soundObject => {
    _.each(this.refsArray, ref => {
      this.refs[ref]?.stopAudio();
    });
  };
  onIndexChanged = () => {
    this?.stopAudio();
  };

  generateRef = () => {
    let ref = UUID.generate();
    this.refsArray.push(ref);
    return ref;
  };
  renderBlocks = () => {
    return slideKeys.map(slide => {
      return (
        <View key={UUID.generate()} style={{ marginBottom: 50 }}>
          <SwipeBlock data={slide} ref={this.generateRef()} />
        </View>
      );
    });
  };

  render() {
    return (
      <View flex background="">
        <Header title="Bleeding - Arm/Legs" />
        <Instructions />
        <View>
          <Button
            title="View PDF Version"
            onPress={() => {
              Actions.pdfView(this.props.modal);
            }}
          />
        </View>

        <Swiper showsButtons loop={false} onIndexChanged={this.onIndexChanged}>
          {this.renderBlocks()}
        </Swiper>
      </View>
    );
  }
}
