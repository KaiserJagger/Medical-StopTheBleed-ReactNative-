import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import View from '../view';
import Text from '../core/Text';

class Bullet extends React.Component {
  getBullet = () => {
    let bullet = '\u2022';
    switch (this.props.level) {
      case '2':
        bullet = '\u00B0';
        break;
    }
    return bullet;
  };
  getMargins = () => {
    let level = this.props.level ? parseInt(this.props.level) : 0;
    let padding = level * 15;
    if (level > 0) {
      //padding += 20;
    }
    return padding;
  };
  render() {
    return (
      <View row style={{ marginTop: 5, marginLeft: this.getMargins() }}>
        <View>
          <Text>{this.getBullet()}</Text>
        </View>
        <View style={{ marginLeft: 10 }}>{this.props.children}</View>
      </View>
    );
  }
}

export default Bullet;
