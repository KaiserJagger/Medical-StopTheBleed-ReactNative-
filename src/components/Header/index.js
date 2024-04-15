import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, Platform, SafeAreaView } from 'react-native';
import { Badge } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

const logo = require('../../assets/images/stb_logo.png');

// custom
import { Text, Theme, UUID, Icon, View } from '../../components/stb/index';

import Configuration from './config.js';

console.log(Platform);

const styles = {
  fontColor: Theme.colorSettings.header.font,
  header: {
    backgroundColor: Configuration.theme.backgroundColor,
    zIndex: 200,
    height: 60,
    width: '100%'
  },
  innerHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor: 'transparent'
  },

  backButtonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  backButton: {
    width: 20,
    backgroundColor: 'transparent'
  },
  titleContainer: {
    backgroundColor: 'transparent',
    flex: 1
  },
  barContainer: {
    backgroundColor: 'transparent'
  },
  icon: {
    fontSize: 40,
    backgroundColor: 'transparent'
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3
      },
      android: {
        elevation: 2
      }
    })
  }
};

class RestHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    home: PropTypes.bool,
    cart: PropTypes.array,
    template: PropTypes.string,
    layout: PropTypes.object
  };
  static defaultProps = {
    title: 'Default Title',
    rightButton: {},
    template: 'default',
    layout: {}
  };
  getTitleLayout = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Text center h5 bold color={Configuration.theme.titleColor}>
          {this.props.title}
        </Text>
      </View>
    );
  };
  layoutTemplates = {
    ...Configuration.templates,
    default: {
      left: ['back'],
      center: ['title'],
      right: ['']
    }
  };
  layoutProps = {
    menu: {
      type: 'icon',
      action: () => {
        this.menuButtonClicked();
      }, // this.props.openDrawer,
      data: {
        icon: 'bars',
        iconType: 'font-awesome'
      }
    },
    title: {
      type: 'component',
      component: this.getTitleLayout
    },
    back: {
      type: 'icon',
      action: Actions.pop,
      data: {
        icon: 'angle-left',
        iconType: 'font-awesome'
      }
    },
    cart: {
      type: 'icon',
      action: Actions.cart,
      data: {
        icon: 'shopping-cart',
        iconType: 'font-awesome'
      }
    },
    edit: {
      type: 'button',
      action: Actions.cart,
      data: {
        title: 'Edit'
      }
    },
    brand: {
      type: 'image',
      source: {
        url: Configuration.hero
      }
    }
  };
  constructor(props) {
    super(props);
    this.mounted = false;
  }
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  menuButtonClicked = () => {
    if (Theme.globalSettings.mainMenu.drawer) {
      Actions.drawerOpen();
    } else {
      Actions.mainMenu();
    }
  };
  getRaised = () => {
    if (Theme.globalSettings.header.raised) {
      return {
        ...styles.raised
      };
    }
    return {};
  };

  getLayout = target => {
    if (!_.isEmpty(this.props.layout)) {
      return this.props.layout[target];
    }
    if (this.props.template) {
      return this.layoutTemplates[this.props.template][target];
    }

    return this.layoutTemplates.default[target];
  };
  renderHeaderItems = array => {
    if (array) {
      return array.map(item => {
        let data = item;
        if (typeof item === 'string') {
          data = this.layoutProps[item];
        }
        if (data) {
          if (data.type === 'icon') {
            return (
              <TouchableOpacity
                key={UUID.generate()}
                style={{
                  backgroundColor: 'transparent',
                  marginRight: 1,
                  paddingVertical: 12,
                  paddingHorizontal: 10
                }}
                transparent
                onPress={() => data.action()}
              >
                <Icon
                  name={data.data.icon}
                  standard
                  containerStyle={{
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                  size={40}
                  badgePos={{ top: -5, right: -5 }}
                  type={data.data.iconType}
                  color={styles.fontColor}
                />
              </TouchableOpacity>
            );
          } else if (data.type === 'image') {
            return (
              <View key={UUID.generate()}>
                <Image
                  square
                  source={data.source.url}
                  style={{
                    marginTop: 3,
                    height: 30,
                    width: 95,
                    resizeMode: 'contain'
                  }}
                />
              </View>
            );
          } else if (data.type === 'button') {
            return (
              <TouchableOpacity
                key={UUID.generate()}
                style={{
                  backgroundColor: Theme.colorSettings.core.defaultButtonColor,
                  borderRadius: Theme.buttonSettings.radius,
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingHorizontal: 10,
                  marginHorizontal: 10
                }}
                onPress={data.action}
              >
                <Text
                  color="white"
                  center
                  style={{ backgroundColor: 'transparent' }}
                >
                  {data.data.title}
                </Text>
              </TouchableOpacity>
            );
          } else if (data.type === 'component') {
            return (
              <View key={UUID.generate()} hCenter vCenter row>
                {data.component()}
              </View>
            );
          }
        }
        return <View key={UUID.generate()} />;
      });
    }
    return <View key={UUID.generate()} />;
  };
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'black' }}>
        <View background="black" style={[styles.header, this.getRaised()]}>
          <View style={styles.innerHeader} background="transparent">
            <View
              flex
              vCenter
              row
              style={{
                zIndex: 20,
                paddingLeft: 7
              }}
            >
              {this.renderHeaderItems(this.getLayout('left'))}
            </View>
            <View
              background="transparent"
              hCenter
              vCenter
              style={{ flex: 2, width: '100%' }}
            >
              {this.renderHeaderItems(this.getLayout('center'))}
            </View>
            <View
              background="transparent"
              flex
              row
              vCenter
              style={{
                zIndex: 21,
                paddingRight: 7,
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              {this.renderHeaderItems(this.getLayout('right'))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default RestHeader;
