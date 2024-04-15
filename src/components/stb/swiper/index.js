import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

// custom
import Text from '../index';

// variables -------
const height = Dimensions.get('window').height;

class LearnMore extends React.Component {
  static propTypes = {
    data: PropTypes.array,
  }
  static defaultProps = {}
  renderSlides = () => {
    return (
      <View>
        <Image style={{ height: 300 }} source={image1} />
        <View style={{ padding: 15 }}>
          <Text h2 header>A Title Goes Here...</Text>
          <Text lorum />
        </View>
      </View>
    );
  }
  render() {
    return (
      <View>
        <View>
          <Swiper style={{ top: 0 }} height={height - 60}>
            {this.renderSlides()}
          </Swiper>
        </View>
      </View>
    );
  }
}

export default LearnMore;
