/* @flow */

import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  View,
  Button,
  UUID,
  Link,
  HR,
  Color
} from '../../components/stb/index';
import Image1 from '../../assets/images/non-serious.jpg';
import Header from '../../components/Header';

import resourcesData from './data';

export default class CurrentStateIndicator extends React.Component {
  renderResourceData = () => {
    return resourcesData.map(resource => {
      return (
        <View key={UUID.generate()}>
          <View>
            <Text h4>{resource.title}</Text>
            <Text style={{ marginTop: 5 }}>{resource.description}</Text>
            <View style={{ marginTop: 5 }}>
              <Link link={resource.link}>{resource.display_link}</Link>
            </View>
          </View>
          <HR />
        </View>
      );
    });
  };
  render() {
    return (
      <View flex>
        <Header title="Resources" template="tabs" />
        <ScrollView>
          <View padding background={Color.secondaryColor}>
            <Text h2 color="white" center>
              Available Resources
            </Text>
          </View>
          <View padding>
            <View>
              <Text>
                To learn more about how to save a life, the Stop the Bleed
                campaign, or other blood-related information, check out the
                following resources below.
              </Text>
            </View>
            <HR />
            <View>{this.renderResourceData()}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
