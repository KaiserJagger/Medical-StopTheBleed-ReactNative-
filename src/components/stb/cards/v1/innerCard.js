import React from 'react';
import { View } from 'react-native';

import Theme from '../../ThemeSettings';

const styles = {
  padding: 15,
  paddingTop: 15,
  paddingBottom: 15,
};

class Card extends React.Component {
  hasBorder = () => {
    if (this.props.border) {
      return (
      {
        borderBottomWidth: 1,
        borderColor: Theme.colorSettings.core.border,
      }
      );
    }
    return {};
  }
  render() {
    return (
      <View style={[styles, this.hasBorder(), { ...this.props.style }]}>
        {this.props.children}
      </View>
    );
  }
}


export default Card;
