import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Theme from '../ThemeSettings';
import random from '../../../utils/random';

const colors = ['#eee', 'red', 'green', 'blue', 'yellow', 'orange', 'purple'];
class CustomIcon extends React.Component {
  static propTypes = {
    padding: PropTypes.bool,
    background: PropTypes.string,
    randomColor: PropTypes.bool,
    paddingTop: PropTypes.bool,
    paddingBottom: PropTypes.bool,
    paddingLeft: PropTypes.bool,
    paddingRight: PropTypes.bool,
    marginLeft: PropTypes.bool,
    marginRight: PropTypes.bool,
    marginTop: PropTypes.bool,
    height: PropTypes.any,
    width: PropTypes.any,
    marginBottom: PropTypes.bool,
    flex: PropTypes.bool,
    row: PropTypes.bool,
    style: PropTypes.any,
    borderTop: PropTypes.bool,
    borderBottom: PropTypes.bool,
    vCenter: PropTypes.bool,
    hCenter: PropTypes.bool,
    vEnd: PropTypes.bool,
    hEnd: PropTypes.bool,
    hide: PropTypes.bool,
    safe: PropTypes.bool
  };
  static defaultProps = {
    safe: false
  };
  getStyles = () => {
    const {
      padding,
      flex,
      hide,
      row,
      borderTop,
      borderBottom,
      vCenter,
      hCenter,
      vEnd,
      hEnd,
      paddingTop,
      paddingBottom,
      marginTop,
      marginBottom,
      background,
      paddingLeft,
      paddingRight,
      marginLeft,
      marginRight,
      height,
      width,
      randomColor
    } = this.props;

    let styleObj = {};
    if (padding) {
      styleObj = { ...styleObj, padding: 15 };
    }
    if (paddingTop) {
      styleObj = { ...styleObj, paddingTop: 15 };
    }
    if (paddingLeft) {
      styleObj = { ...styleObj, paddingLeft: 15 };
    }
    if (paddingRight) {
      styleObj = { ...styleObj, paddingRight: 15 };
    }
    if (marginLeft) {
      styleObj = { ...styleObj, marginLeft: 15 };
    }
    if (marginRight) {
      styleObj = { ...styleObj, marginRight: 15 };
    }
    if (paddingBottom) {
      styleObj = { ...styleObj, paddingBottom: 15 };
    }
    if (marginTop) {
      styleObj = { ...styleObj, marginTop: 15 };
    }
    if (marginBottom) {
      styleObj = { ...styleObj, marginBottom: 15 };
    }
    if (flex) {
      styleObj = { ...styleObj, flex: 1 };
    }
    if (row) {
      styleObj = { ...styleObj, flexDirection: 'row' };
    }
    if (borderTop) {
      styleObj = {
        ...styleObj,
        borderTopWidth: 1,
        borderTopColor: Theme.colorSettings.core.border
      };
    }
    if (borderBottom) {
      styleObj = {
        ...styleObj,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colorSettings.core.border
      };
    }

    if (background) {
      styleObj = { ...styleObj, backgroundColor: background };
    }
    if (randomColor) {
      styleObj = { ...styleObj, backgroundColor: random(colors) };
    }
    if (width) {
      styleObj = { ...styleObj, width };
    }
    if (height) {
      styleObj = { ...styleObj, height };
    }

    if (vCenter) {
      if (row) {
        styleObj = { ...styleObj, alignItems: 'center' };
      } else {
        styleObj = { ...styleObj, justifyContent: 'center' };
      }
    }
    if (hCenter) {
      if (!row) {
        styleObj = { ...styleObj, alignItems: 'center' };
      } else {
        styleObj = { ...styleObj, justifyContent: 'center' };
      }
    }
    if (vEnd) {
      if (row) {
        styleObj = { ...styleObj, alignItems: 'flex-end' };
      } else {
        styleObj = { ...styleObj, justifyContent: 'flex-end' };
      }
    }
    if (hEnd) {
      if (!row) {
        styleObj = { ...styleObj, alignItems: 'flex-end' };
      } else {
        styleObj = { ...styleObj, justifyContent: 'flex-end' };
      }
    }
    if (hide) {
      styleObj = { ...styleObj, display: 'none' };
    }
    return styleObj;
  };
  getStylesArray = () => {
    const array = [];
    if (this.props.style) {
      if (Array.isArray(this.props.style)) {
        _.each(this.props.style, _style => {
          array.push({ ..._style });
        });
      } else {
        array.push({ ...this.props.style });
      }
    }
    array.push(this.getStyles());
    return array;
  };
  render() {
    if (this.props.safe) {
      return <SafeAreaView {...this.props} style={this.getStylesArray()} />;
    }
    return <View {...this.props} style={this.getStylesArray()} />;
  }
}

export default CustomIcon;
