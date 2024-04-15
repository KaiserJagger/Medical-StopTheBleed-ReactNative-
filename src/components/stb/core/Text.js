import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import _ from 'lodash';

import themeSettings from '../../../themes/ttg';

const fontSettings = themeSettings.theme.font;

const textArray = [
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cons',
  'uaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis',
  'iae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla',
  'Sed ut perspic Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cons'
];

class CustomText extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    weight: PropTypes.string,
    white: PropTypes.bool,
    bold: PropTypes.bool,
    style: PropTypes.any,
    right: PropTypes.bool,
    left: PropTypes.bool,
    center: PropTypes.bool,
    // flex: PropTypes.bool,
    lorum: PropTypes.bool,
    header: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number
  };
  static defaultProps = {
    right: false,
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    center: false,
    white: false,
    left: false,
    bold: false,
    weight: '',
    style: {},
    // flex: false,
    color: '',
    lorum: false,
    header: false
  };
  getStyles = () => {
    let local = {};
    const {
      header,
      color,
      h1,
      h2,
      h3,
      h4,
      h5,
      weight,
      white,
      bold,
      center,
      right,
      left,
      // flex,
      size
    } = this.props;

    if (h1) {
      local = { ...fontSettings.header.h1 };
    } else if (h2) {
      local = { ...fontSettings.header.h2 };
    } else if (h3) {
      local = { ...fontSettings.header.h3 };
    } else if (h4) {
      local = { ...fontSettings.header.h4 };
    } else if (h5) {
      local = { ...fontSettings.header.h5 };
    } else {
      local = { ...fontSettings.body.normal };
    }

    if (center) {
      local = { ...local, textAlign: 'center' };
    } else if (left) {
      local = { ...local, textAlign: 'left' };
    } else if (right) {
      local = { ...local, textAlign: 'right' };
    }
    if (weight) {
      local = { ...local, fontWeight: weight };
    }
    if (Array.isArray(this.props.style)) {
      _.each(this.props.style, item => {
        local = { ...local, ...item };
      });
    } else {
      local = { ...local, ...this.props.style };
      //console.log(this.props.style)
      //Object.assign(local, { ...local, ...this.props.style });
    }
    // if (flex) {
    //   local = { ...local, flex: 1 };
    // }

    if (white) {
      local = { ...local, color: 'white' };
    }

    if (color !== '') {
      local = { ...local, color };
    }

    if (header) {
      local = { ...local, marginBottom: 10 };
    }

    if (size) {
      local = { ...local, fontSize: size };
    }

    local = {
      ...local,
      fontFamily: fontSettings.body.normal.fontFamily
    };

    if (bold) {
      local = {
        ...local,
        ...fontSettings.body.bold
      };
      if (color) {
        local = {
          ...local,
          color: color
        };
      }
    }
    return { ...local };
  };
  getText = () => {
    if (this.props.lorum) {
      return textArray[1];
    }
    return this.props.children;
  };
  render() {
    return (
      <Text {...this.props} style={this.getStyles()}>
        {this.getText()}
      </Text>
    );
  }
}

export default CustomText;
