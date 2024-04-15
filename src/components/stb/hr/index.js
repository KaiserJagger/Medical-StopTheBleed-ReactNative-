import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Theme from './../ThemeSettings.js';

class HR extends React.Component {
  static propTypes = {
    padding: PropTypes.number,
  }
  static defaultProps = {
    padding: 15,
  }
  render() {
    return (
      <View
        style={{
          marginTop: this.props.padding,
          marginBottom: this.props.padding,
          borderTopWidth: 1,
          borderTopColor: Theme.colorSettings.core.border,
        }}
      />
    );
  }
}

export default HR;
