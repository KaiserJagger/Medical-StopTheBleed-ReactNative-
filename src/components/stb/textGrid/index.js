import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import Text from '../core/Text';
import Theme from '../ThemeSettings';

class TextGrid extends React.Component {
  boldRight = () => ({
    fontWeight: (this.props.rightBold) ? '500' : 'normal',
  })
  boldLeft = () => ({
    fontWeight: (this.props.leftBold) ? '500' : 'normal',
  })
  colorRight = () => ({
    color: this.props.rightColor,
  })
  colorLeft = () => ({
    color: this.props.leftColor,
  })
  render() {
    return (
      <View style={[{ flexDirection: 'row', paddingBottom: 2 }, { ...this.props.style }]}>

        {this.props.leftText !== '' &&
        <Text
          style={[
                    { flex: 2 },
                    { ...this.boldLeft() },
                    { ...this.colorLeft }]}
        >
          {this.props.leftText}
        </Text>
        }

        {this.props.rightText !== '' &&
        <Text
          style={[
                { textAlign: 'right', flex: 1 },
                { ...this.boldRight() },
                { ...this.colorRight() }]}
        >
          {this.props.rightText}
        </Text>
        }

      </View>
    );
  }
}

TextGrid.defaultProps = {
  rightText: '',
  leftText: '',
  rightBold: true,
  rightColor: Theme.colorSettings.core.bodyFont,
  leftColor: Theme.colorSettings.core.bodyFont,
};
TextGrid.propTypes = {
  rightText: PropTypes.any,
  leftText: PropTypes.any,
  rightBold: PropTypes.bool,
  leftBold: PropTypes.bool,
  leftColor: PropTypes.string,
  rightColor: PropTypes.string,
  style: PropTypes.object,
};

export default TextGrid;
