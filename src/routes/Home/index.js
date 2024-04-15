/* @flow */
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Text,
  View,
  HR,
  Button,
  Color,
  CustomModal
} from '../../components/stb/index';
//import { Video } from 'expo';
import { Actions } from 'react-native-router-flux';
import Poster from '../../assets/images/video-poster.jpg';

import Header from '../../components/Header';
import Instructions from '../../components/Modals/Instructions';

export default class HomePage extends React.Component {
  render() {
    const { width } = Dimensions.get('window');
    return (
      <View flex>
        <Header title="Home" template="tabs" />
        <Instructions />
        <ScrollView>
          <View>
            <View>
              <View padding background={Color.secondaryColor} hide>
                <Text h2 color="white" center>
                  Stop the Bleed
                </Text>
              </View>
              <View padding background="">
                <View marginBottom>
                  <TouchableOpacity onPress={Actions.mainVideo}>
                    <Image
                      source={Poster}
                      resizeMode="contain"
                      style={{ width: '100%', height: 200 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text h1>Know a serious bleed when you see it</Text>
                  <View marginTop>
                    <Text>
                      What’s the best way to stop the bleed? First, determine
                      how serious the bleeding is.
                    </Text>
                  </View>
                </View>
                <View marginTop marginBottom>
                  <Button
                    title="Take Action"
                    onPress={() => {
                      Actions.jump('action');
                    }}
                  />
                </View>
                <HR />
                <View marginBottom>
                  <View>
                    <Text h1>Quick Access:</Text>
                  </View>
                  <View marginTop>
                    <Text>
                      Use the buttons below to gain quick access to the
                      resources you need for stopping a bleed.
                    </Text>
                  </View>
                </View>
                <View>
                  <Button
                    title="View PDF Version"
                    onPress={() => {
                      Actions.pdfView(this.props.modal);
                    }}
                  />
                </View>
                <View marginTop>
                  <Button
                    ref="audioButton"
                    arrow={true}
                    icon={'headphones'}
                    onPress={() => {
                      Actions.applyFullAudio({ modal: this.props.modal });
                    }}
                    title="Listen to Audio Version"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
