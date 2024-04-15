import React from 'react';
import { StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Text, View, Button, Color, Bullet } from '../../components/stb/index';
import Image1 from '../../assets/images/non-serious.jpg';
import Header from '../../components/Header';

class Page extends React.Component {
  render() {
    let { width } = Dimensions.get('window');
    return (
      <View flex>
        <Header title="Non-Serious Bleeding" />
        <ScrollView>
          <View>
            <View
              padding
              background={Color.tertiaryColor}
              style={{ display: 'none' }}
            >
              <Text h2 color="white" center>
                Treat Non-Serious Bleeding
              </Text>
            </View>
            <View padding background="">
              <View marginBottom>
                <Text h3>Treat Non-Serious Bleeding: </Text>
              </View>
              <View>
                <Text>
                  First, apply pressure! Remember, pressure stops bleeding. Here
                  is how.
                </Text>
              </View>
              <View>
                <Bullet>
                  <Text>
                    <Text bold>How long?</Text> There is no definite amount of
                    time. Just apply continuous pressure until bleeding stops.
                  </Text>
                </Bullet>
                <View>
                  <Bullet>
                    <Text bold>How and how much?</Text>
                  </Bullet>
                </View>
                <View>
                  <Bullet level="2">
                    <Text>
                      Use your hands to apply firm steady pressure until
                      bleeding stops. You should hold pressure for at least 5
                      minutes before looking at the wound.
                    </Text>
                  </Bullet>
                  <Bullet level="2">
                    <Text>
                      If bleeding does not stop, call 911 and continuing
                      applying pressure until medical help arrives.
                    </Text>
                  </Bullet>
                  <Bullet level="2">
                    <Text>
                      If you can, try to ensure the injured person is on a firm
                      surface. That way, when you apply force to the bleeding,
                      you are pressing into something.
                    </Text>
                  </Bullet>
                </View>

                <View>
                  <Bullet>
                    <Text>
                      <Text bold>Using what?</Text> If you have gauze available,
                      use that. If not, use whatever you have available, such as
                      a shirt, newspapers, or your hand.
                    </Text>
                  </Bullet>
                </View>

                <View marginTop>
                  <Text>
                    Continue applying pressure until medical help arrives.
                  </Text>
                </View>
              </View>
              <View marginTop flex style={{ alignItems: 'center' }}>
                <Image
                  resizeMode={'contain'}
                  source={Image1}
                  style={{ width: width - 30 }}
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
