import React from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';

// local
import Text from '../../core/Text';

class Link extends React.Component {
  static propTypes = {
    textStyles: PropTypes.object
  };
  static defaultProps = {
    textStyles: {}
  };
  render() {
    return (
      <Text
        style={{
          color: 'blue',
          textDecorationLine: 'underline',
          ...this.props.textStyles
        }}
        onPress={() => {
          global.linkPressed = true;
          Linking.openURL(this.props.link);
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default Link;
