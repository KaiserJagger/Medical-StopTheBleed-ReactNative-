import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
//custom components
import {
  Text,
  View,
  Button,
  HR,
  Color,
  Image,
  Bullet,
  ArrowButton
} from '../../components/stb/index';
import Image1 from '../../assets/images/emergency-path-serious.png';
import Image2 from '../../assets/images/emergency-path-non-serious.png';
import Header from '../../components/Header';

class Page extends React.Component {
  static propTypes = {
    modal: PropTypes.bool
  };
  static defaultProps = {
    modal: false
  };

  getTemplate = () => {
    if (this.props.modal) {
      return 'modal';
    }
    return 'tabs';
  };
  getLayout = () => {
    return {
      left: [''],
      center: ['brand'],
      right: [
        {
          type: 'button',
          action: () => {
            Actions.home();
          },
          data: {
            title: 'Close'
          }
        }
      ]
    };
  };
  generateSeriousBleedingText = () => {
    if (this.props.modal) {
      return (
        <View marginTop>
          <View>
            <Text>Bleeding is serious or life-threatening if:</Text>
          </View>
          <View marginLeft>
            <Bullet>
              <Text>Blood is continuously flowing.</Text>
            </Bullet>
            <Bullet>
              <Text>Blood is squirting.</Text>
            </Bullet>
            <Bullet>
              <Text>
                There is a half can of soda’s worth of blood on the ground.
              </Text>
            </Bullet>
            <Bullet>
              <Text>Blood is pooling on the surface.</Text>
            </Bullet>
          </View>
          <View marginTop>
            <Text>
              Bleeding like this can occur when someone is seriously injured
              such as during an accident or explosion.
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View>
        <View marginTop>
          <Text>
            Serious or life-threatening bleeding will be red and continuously
            flowing. It may be squirting.
          </Text>
        </View>
        <View marginTop>
          <Text>
            In terms of amount, serious bleeding might mean there’s a half can
            of soda’s worth of blood on the ground. It may be pooling on the
            surface. Bleeding like this can occur when a person’s limb is
            removed during an accident or by an explosive device.
          </Text>
        </View>
      </View>
    );
  };
  generateNonSeriousBleeding = () => {
    if (this.props.modal) {
      return (
        <View marginTop>
          <Text>
            Non-serious bleeding resolves on its own or with direct pressure. A
            paper cut or a cut while cooking are considered non-serious.
          </Text>
        </View>
      );
    }
    return (
      <View>
        <View marginTop>
          <Text>
            Non-serious bleeding sometimes resolves on its own (it clots!).
            Sometimes it requires some direct pressure.
          </Text>
        </View>
        <View marginTop>
          <Text>
            For example, a small paper cut will probably resolve on its own and
            clot. On the other hand, if you cut yourself while cooking, you
            might need to apply direct pressure to the cut to get it to stop
            bleeding.
          </Text>
        </View>
      </View>
    );
  };
  getHeader = () => {
    if (this.props.prev) {
      return <Header title="Take Action" layout={this.getLayout()} />;
    }
    return <Header title="Take Action" template={this.getTemplate()} />;
  };
  render() {
    return (
      <View flex>
        {this.getHeader()}
        <ScrollView>
          <View padding background={Color.secondaryColor}>
            <Text h2 color="white" center>
              How Serious is the Bleeding?
            </Text>
          </View>
          <View padding>
            <View>
              <View>
                <Text h2>Serious Bleeding</Text>
                {this.generateSeriousBleedingText()}
                <View>
                  <Image source={Image1} marginTop border={false} />
                </View>

                <View>
                  <Text h3>I'm dealing with serious bleeding</Text>
                </View>
                <View marginTop>
                  <Button
                    color="white"
                    arrow
                    background={Color.secondaryColor}
                    onPress={() => {
                      Actions.actionSerious({ modal: this.props.modal });
                    }}
                    title="See Walkthrough (Audio + Images)"
                  />
                </View>
                <View marginTop>
                  <Button
                    color="white"
                    onPress={() => {
                      Actions.applyFullAudio({ modal: this.props.modal });
                    }}
                    icon={'headphones'}
                    background={Color.secondaryColor}
                    ref="audioButton"
                    title="Listen to Audio Version"
                  />
                </View>
              </View>
            </View>

            <HR />
            <View>
              <View>
                <Text h2>Non-Serious Bleeding</Text>
                {this.generateNonSeriousBleeding()}
                <View>
                  <Image source={Image2} marginTop border={false} />
                </View>
                <Button
                  color="black"
                  background={Color.primaryColor}
                  arrow
                  style={{ marginTop: 15 }}
                  onPress={() => {
                    Actions.actionNonSerious({ modal: this.props.modal });
                  }}
                  title="I'm dealing with non-serious bleeding"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Page;
