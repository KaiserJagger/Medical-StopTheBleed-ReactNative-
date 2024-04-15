import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import Theme from '../ThemeSettings';

class CustomCheckbox extends React.Component {
  static propTypes = {
    margin: PropTypes.bool,
  }

  render() {
    return (
      <CheckBox
        title="Help"
        textStyle={{ fontWeight: 'normal', ...Theme.fontSettings.body.normal }}
        containerStyle={{ borderWidth: 0, marginLeft: 5, marginRight: 5 }}
        {...this.props}
      />
    );
  }
}

export default CustomCheckbox;
