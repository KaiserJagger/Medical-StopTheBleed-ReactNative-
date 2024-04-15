import React from 'react';
import { Image, Dimensions, Platform } from 'react-native';
import { View } from '../stb/index';

class Something extends React.Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', () => {
      console.log('onchange');
      this.setState({
        orientation: 'test'
      });
    });
  }
  renderImage = image => {
    let { width, height } = Dimensions.get('window');
    return (
      <Image
        source={image}
        resizeMode={'cover'}
        style={{
          flex: 1,
          alignSelf: 'stretch',
          width: width - 60,
          height: 300,
          borderWidth: 1,
          borderColor: '#eee',
          marginLeft: 15
        }}
      />
    );
  };

  render() {
    return <View>{this.renderImage(this.props.image)}</View>;
  }
}

export default Something;
