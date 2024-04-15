import React from 'react';
import { Image } from 'react-native';
import {
  Text,
  View,
  Button,
  Icon,
  HR,
  UUID,
  CustomModal
} from '../../components/stb/index';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  // componentDidMount = async () => {
  //   try {
  //     // see if existing token exist
  //     //AsyncStorage.clear();
  //     const value = await AsyncStorage.getItem('swipeInstructions');
  //     if (value === null) {
  //       AsyncStorage.setItem('swipeInstructions', '1');
  //       setTimeout(this.showModal, 500);
  //     }
  //   } catch (error) {
  //     //this.props.throwApiError();
  //   }
  // };
  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <CustomModal
        isVisible={this.state.showModal}
        alert
        modalType={'right'}
        onClose={this.hideModal}
      >
        <View>
          <View row>
            <View style={{ flex: 4 }}>
              <Text h1>Navigation Tips</Text>
            </View>
            <View flex row style={{ justifyContent: 'flex-end' }}>
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../../assets/images/icon-transparent.png')}
              />
            </View>
          </View>
          <HR />
          <View marginBottom>
            <Image
              resizeMode="contain"
              style={{
                width: '100%',
                height: 61,
                borderWidth: 1,
                borderColor: '#eee'
              }}
              source={require('../../assets/images/help.jpg')}
            />
          </View>
          <Text>
            To navigate between items, press the left or right 'chevron' buttons
            or swipe left or right on the screen with your finger. Touch
            anywhere outside of this popup to close.
          </Text>
        </View>
      </CustomModal>
    );
  }
}

export default Modal;
