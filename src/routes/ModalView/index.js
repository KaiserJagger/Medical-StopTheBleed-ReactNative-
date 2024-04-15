import React from 'react';
import { Image, ImageBackground, AppState } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text, View, Button, HR, Color } from '../../components/stb/index';
import Banner from '../../assets/images/stb_logo.png';
import Background from '../../assets/images/modal_bg.jpg';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  selectNo = () => {
    if (this.props.prev) {
      Actions.pop();
      Actions.pop();
      return;
    }
    Actions.home();
  };
  render() {
    return (
      <View padding background="black" flex vCenter>
        <View>
          <Image
            source={Banner}
            style={{ width: '100%', resizeMode: 'contain' }}
          />
          <HR />
          <Text h2 center color="white">
            Are you currently in an emergency?
          </Text>
          <View row marginTop>
            <View flex marginRight>
              <Button
                title="Yes"
                arrow={false}
                onPress={() => {
                  Actions.modalTakeAction({
                    modal: true,
                    prev: this.props.prev
                  });
                }}
                background={Color.secondaryColor}
              />
            </View>
            <View flex marginLeft>
              <Button
                title="No"
                color="black"
                arrow={false}
                onPress={this.selectNo}
                background={Color.primaryColor}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Modal;
