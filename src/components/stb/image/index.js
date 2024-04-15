import React from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions } from 'react-native';
import View from '../view';

const { width, height } = Dimensions.get('window');

class CustomImage extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    border: PropTypes.bool,
    marginTop: PropTypes.bool,
    margin: PropTypes.bool,
    marginBottom: PropTypes.bool
  };
  static defaultProps = {
    height: 300,
    border: true,
    marginTop: false,
    margin: false,
    marginBottom: false
  };
  getBorder = () => {
    if (this.props.border) {
      return {
        borderWidth: 1,
        borderColor: '#eee'
      };
    }
    return {};
  };
  getStyles = () => {
    if (this.props.marginTop) {
      return {
        marginTop: 15
      };
    }
    if (this.props.marginBottom) {
      return {
        marginBottom: 15
      };
    }
    if (this.props.margin) {
      return {
        margin: 15
      };
    }
  };
  render() {
    return (
      <View style={this.getStyles()}>
        <Image
          source={this.props.source}
          resizeMode={'contain'}
          style={{
            width: '100%',
            height: 300,
            ...this.getBorder()
          }}
        />
      </View>
    );
  }
}

export default CustomImage;
