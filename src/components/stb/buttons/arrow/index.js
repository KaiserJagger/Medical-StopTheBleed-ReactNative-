import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

import themeSettings from '../../ThemeSettings';

const styles = {
  padding: {
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15
  }
};

class ArrowRightButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.any,
    style: PropTypes.object,
    padding: PropTypes.bool,
    border: PropTypes.bool,
    borderBottom: PropTypes.bool,
    borderTop: PropTypes.bool,
    background: PropTypes.string,
    color: PropTypes.string
  };
  static defaultProps = {
    padding: true,
    border: false,
    borderBottom: false,
    borderTop: false,
    background: 'white',
    color: 'black'
  };
  getPadding = () => {
    if (this.props.padding) {
      return styles.padding;
    }
    return {};
  };
  getBorder = () => {
    const { border, borderTop, borderBottom } = this.props;
    const color = themeSettings.colorSettings.core.border;
    if (border) {
      return {
        borderWidth: 1,
        borderColor: color
      };
    }
    let borderSettings = {};
    if (borderTop) {
      borderSettings = {
        borderTopWidth: 1,
        borderTopColor: color
      };
    }

    if (borderBottom) {
      borderSettings = {
        ...borderSettings,
        borderBottomWidth: 1,
        borderBottomColor: color
      };
    }

    return borderSettings;
  };
  getBackgroundColor = () => {
    return {
      backgroundColor: this.props.background
    };
  };
  getFontColor = () => {
    return {
      color: this.props.color
    };
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          { flexDirection: 'row' },
          this.getPadding(),
          this.getBackgroundColor(),
          this.getBorder()
        ]}
      >
        <View style={[{ flex: 10 }, { ...this.props.style }]}>
          {this.props.children}
        </View>
        <View
          style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
        >
          <Icon
            name="angle-right"
            type="font-awesome"
            iconStyle={{ fontSize: 18, color: this.props.color }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ArrowRightButton;
