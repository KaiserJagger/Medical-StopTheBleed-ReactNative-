/* @flow */
import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Text, View, Button, HR, Color } from '../../components/stb/index';
import Header from '../../components/Header';

class Page extends React.Component {
  render() {
    return (
      <View flex>
        <Header title="Serious Bleeding" />
        <View
          padding
          background={Color.tertiaryColor}
          style={{ display: 'none' }}
        >
          <Text h2 color="white" center>
            Treat Serious Bleeding
          </Text>
        </View>
        <View padding>
          <View marginBottom>
            <Text center>Where is the serious bleeding occurring?</Text>
          </View>
          <View>
            <Button
              title="Arms/Legs"
              onPress={() => {
                Actions.actionSeriousArmLeg(this.props.modal);
              }}
            />
          </View>
          <View marginTop>
            <Button
              title="Other than the Arms/Legs"
              onPress={() => {
                Actions.actionSeriousOther(this.props.modal);
              }}
            />
          </View>
          <View marginTop>
            <Button
              title="Full Tourniquet Application"
              onPress={() => {
                Actions.actionSeriousFull(this.props.modal);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Page;
