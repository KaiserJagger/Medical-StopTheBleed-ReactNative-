import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  WebView,
  Platform
} from 'react-native';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

import { View, Text, Link, Icon } from '../../components/stb';

//custom components
import Header from '../../components/Header/';
import PDF from '../../assets/documents/jit.pdf';
import Image1 from '../../assets/documents/images/jit-1.jpg';
import Image2 from '../../assets/documents/images/jit-2.jpg';
// ----------------------------------- end components --------------------

const win = Dimensions.get('window');
const imageStyles = {
  flex: 1,
  alignSelf: 'stretch',
  width: win.width,
  height: win.height
};
export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: Platform.OS !== 'ios' };
  }
  onLoad = () => {
    this.setState({ loaded: true });
  };
  renderLoader = () => {
    if (!this.state.loaded) {
      return (
        <View flex vCenter hCenter>
          <Text h1>Loading...</Text>
        </View>
      );
    }
    return <View />;
  };
  renderShareButton = () => {
    let YOUR_ID = '866762270193956';
    let THE_URL_YOU_WANT_TO_SHARE =
      'https://s3.amazonaws.com/stop-the-bleed/share-pdf.html';
    let THE_LANDING_URL_AFTER_SHARING = 'https://facebook.com';
    let link = `https://www.facebook.com/dialog/share?app_id=${YOUR_ID}&display=popup&href=${THE_URL_YOU_WANT_TO_SHARE}&redirect_uri=${THE_LANDING_URL_AFTER_SHARING}`;

    return (
      <View vCenter hCenter row style={{ backgroundColor: '#204F70' }}>
        <View>
          <Icon color="white" name="facebook" />
        </View>
        <View>
          <Link
            textStyles={{
              textAlign: 'center',
              textDecorationLine: 'none',
              padding: 15,
              color: 'white'
            }}
            link={link}
          >
            Share to Facebook
          </Link>
        </View>
      </View>
    );
  };
  getView = () => {
    if (Platform.OS === 'ios') {
      return (
        <View style={{ flex: 1 }}>
          <WebView
            onLoadEnd={() => {
              this.onLoad();
            }}
            style={{ flex: 1 }}
            bounces={false}
            scrollEnabled={true}
            source={PDF}
          />
          {this.renderShareButton()}
        </View>
      );
    }
    return (
      <View flex>
        <ScrollView>
          <Image style={imageStyles} resizeMode={'contain'} source={Image1} />
          <Image style={imageStyles} resizeMode={'contain'} source={Image2} />
        </ScrollView>
        {this.renderShareButton()}
      </View>
    );
  };
  render() {
    return (
      <View flex>
        <Header title="View PDF" />
        {this.renderLoader()}
        {this.getView()}
      </View>
    );
  }
}
