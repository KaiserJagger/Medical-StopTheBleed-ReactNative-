import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Sound from 'react-native-sound';

import _ from 'lodash';
const Color = require('color');

import fonts from '../../../../themes/ttg/fonts';
import Text from '../../core/Text';
import View from '../../view';
import Theme from '../../ThemeSettings';
import Icon from '../../icon';

const styles = {
  button: {
    padding: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  buttonText: {
    backgroundColor: 'transparent'
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 2
      }
    })
  },
  icon: {
    height: 52,
    width: 52
  }
};

class NormalButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    raised: PropTypes.bool,
    radius: PropTypes.number,
    style: PropTypes.object,
    icon: PropTypes.string,
    iconType: PropTypes.string,
    color: PropTypes.string,
    bold: PropTypes.bool,
    background: PropTypes.string,
    size: PropTypes.number,
    theme: PropTypes.object,
    uppercase: PropTypes.bool,
    reverse: PropTypes.bool,
    warning: PropTypes.bool,
    flex: PropTypes.bool,
    margin: PropTypes.bool,
    hollow: PropTypes.bool,
    disabled: PropTypes.bool,
    arrow: PropTypes.bool,
    audioSource: PropTypes.any,
    onAudioPlay: PropTypes.func,
    onAudioStop: PropTypes.func
  };
  static defaultProps = {
    title: 'Default Text',
    raised: true,
    radius: 5,
    arrow: true,
    icon: '',
    iconType: 'font-awesome',
    style: {},
    color: Theme.buttonSettings.color,
    bold: false,
    audioSource: null,
    disabled: false,
    background: Theme.colorSettings.core.defaultButtonColor,
    size: 15,
    theme: Theme.buttonSettings,
    uppercase: true,
    reverse: false,
    warning: false,
    flex: false,
    margin: false,
    hollow: false
  };
  constructor(props) {
    super(props);
    this.soundObject = null;
    this.state = { audioPlaying: false };
  }
  playAudio = () => {
    if (this.props.onAudioPlay) {
      this.props.onAudioPlay();
    }

    let source = this.props.audioSource;
    if (this.soundObject != null) {
      this.soundObject.stop();
    }

    // if (this.soundObject) {
    //   this.soundObject.play();
    //   this.setState({ audioPlaying: true });
    //   return;
    // }
    this.soundObject = new Sound(source, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      this.soundObject.play(success => {
        this.setState({ audioPlaying: false });
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
          // reset the player to its uninitialized state (android only)
          // this is the only option to recover after an error occured and use the player again
          this.soundObject.reset();
        }
      });
      this.setState({ audioPlaying: true });
    });
  };
  pauseAudio = () => {
    if (this.soundObject) {
      this.soundObject.pause();
    }
    this.setState({ audioPlaying: false });
  };

  stopAudio = () => {
    if (this.props.onAudioStop) {
      this.props.onAudioStop();
    }
    if (this.soundObject) {
      this.soundObject.stop();
    }
    this.setState({ audioPlaying: false });
  };
  toggleAudioState = () => {
    if (this.state.audioPlaying) {
      this.pauseAudio();
      return;
    }
    this.playAudio();
  };
  onPress = () => {
    if (this.props.audioSource) {
      this.toggleAudioState();
    }
    if (this.props.onPress) {
      this.props.onPress();
    }
  };
  getShadow = () => {
    const theme = this.props.theme;
    if (!_.isEmpty(theme)) {
      if (theme.raised) {
        return styles.raised;
      }
      return {};
    }
    if (this.props.raised) {
      return styles.raised;
    }
    return {};
  };
  getBorderRadius = () => {
    const theme = this.props.theme;
    if (!_.isEmpty(theme)) {
      return theme.radius;
    }
    return this.props.radius;
  };
  getBackgroundColor = () => {
    if (this.props.reverse) {
      return this.props.color;
    }
    if (this.props.warning) {
      return Theme.colorSettings.buttons.warning;
    }

    if (this.props.hollow) {
      return 'transparent';
    }
    return this.props.background;
  };
  getMargin = () => {
    return this.props.margin ? 10 : 0;
  };
  getFlex = () => {
    return this.props.flex ? 1 : 0;
  };

  getColor = () => {
    if (this.props.reverse) {
      return this.props.background;
    }
    if (this.props.warning) {
      return 'black';
    }

    if (this.props.hollow) {
      return Theme.colorSettings.core.bodyFont;
    }

    if (this.props.bold) {
      return Theme.fontSettings.body.bold.color;
    }
    return this.props.color;
  };
  getBold = () => {
    const theme = this.props.theme;
    if (!_.isEmpty(theme)) {
      return theme.bold ? '400' : '300';
    }
    return this.props.bold ? '400' : '300';
  };
  getFontSize = () => {
    const theme = this.props.theme;

    if (this.props.bold) {
      return Theme.fontSettings.body.bold.fontSize;
    }

    if (!_.isEmpty(theme)) {
      return theme.size;
    }

    return this.props.size;
  };
  getTextStyles = () => ({
    color: this.getColor(),
    fontWeight: this.getBold(),
    fontSize: this.getFontSize()
  });
  getTitle = () => {
    const theme = this.props.theme;
    if (!_.isEmpty(theme)) {
      return theme.uppercase
        ? this.props.title.toUpperCase()
        : this.props.title;
    }
    if (this.props.uppercase) {
      this.props.title.toUpperCase();
    }
    return this.props.title;
  };
  getBorder = () => {
    if (this.props.hollow) {
      return {
        borderWidth: 1,
        borderColor: Color(Theme.colorSettings.core.secondaryColor)
          .lighten(0.5)
          .hex()
      };
    }
    return {};
  };
  getButtonStyles = () => ({
    borderRadius: this.getBorderRadius(),
    ...this.getShadow(),
    backgroundColor: this.getBackgroundColor(),
    flex: this.getFlex(),
    margin: this.getMargin(),
    ...this.getBorder()
  });
  renderIcon = () => {
    if (this.props.icon !== '') {
      return (
        <Icon
          containerStyle={{ padding: 0, margin: 0, marginRight: 15 }}
          name={this.props.icon}
          type={this.props.iconType}
          color={this.getColor()}
        />
      );
    }
    return <View />;
  };
  renderSoundIcon = () => {
    if (this.props.audioSource) {
      return (
        <Icon
          containerStyle={{ padding: 0, margin: 0, marginLeft: 15 }}
          name={this.state.audioPlaying ? 'pause' : 'play'}
          color={this.getColor()}
        />
      );
    }
  };
  getArrow = () => {
    if (this.props.arrow) {
      return (
        <Icon
          name="angle-right"
          type="font-awesome"
          iconStyle={{ fontSize: 18, color: this.props.color }}
        />
      );
    }
    return <View />;
  };
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.onPress}
        style={[styles.button, this.getButtonStyles(), { ...this.props.style }]}
      >
        {this.renderIcon()}
        <View>
          <Text center style={[styles.buttonText, this.getTextStyles()]}>
            {this.getTitle()}
          </Text>
        </View>
        {this.renderSoundIcon()}
        <View row style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
          {this.getArrow()}
        </View>
      </TouchableOpacity>
    );
  }
}

export default NormalButton;
