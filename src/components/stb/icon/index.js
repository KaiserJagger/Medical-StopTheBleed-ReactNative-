import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Badge } from 'react-native-elements';

import Theme from '../ThemeSettings';
import View from '../view';

class CustomIcon extends React.Component {
  static propTypes = {
    margin: PropTypes.bool,
    customMargin: PropTypes.object,
    badge: PropTypes.number,
    badgeType: PropTypes.string,
    badgePos: PropTypes.object,
    standard: PropTypes.bool
  };
  getMargin = () => {
    if (this.props.margin) {
      return {
        marginLeft: 7,
        marginRight: 7,
        marginTop: 7,
        marginBottom: 7
      };
    }
    if (this.props.customMargin) {
      return this.props.customMargin;
    }
    return {};
  };
  getBadgeType = () => {
    if (this.props.badgeType === 'alert') {
      return Theme.colorSettings.core.danger;
    }
    return 'rgba(1,1,1,.6)';
  };
  getSize = () => {
    if (this.props.standard) {
      return 24;
    }
    return 18;
  };
  getBadgePos = () => {
    if (this.props.badgePos) {
      return this.props.badgePos;
    }
    return { top: -3, right: -3 };
  };
  renderBadge = () => {
    if (this.props.badge && this.props.badge > 0) {
      return (
        <View
          style={[{ position: 'absolute', zIndex: 100 }, this.getBadgePos()]}
        >
          <Badge
            value={this.props.badge}
            textStyle={{
              color: Theme.colorSettings.core.badgeFontColor,
              fontSize: 10
            }}
            containerStyle={{
              padding: 5,
              borderRadius: 100,
              backgroundColor: this.getBadgeType()
            }}
          />
        </View>
      );
    }
    return <View />;
  };
  render() {
    return (
      <View style={{ ...this.getMargin() }}>
        {this.renderBadge()}
        <Icon
          type={'font-awesome'}
          size={this.getSize()}
          color={Theme.colorSettings.core.bodyFont}
          containerStyle={{ padding: 0, margin: 0 }}
          {...this.props}
        />
      </View>
    );
  }
}

export default CustomIcon;
