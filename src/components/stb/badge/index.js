import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Badge } from 'react-native-elements';

const styles = {
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
  badge: {
    padding: 0,
    height: 18,
    width: 18,
    borderRadius: 100,
    backgroundColor: '#C30D1B',
  },
};

class CustomBadge extends React.Component {
  static propTypes = {
    count: PropTypes.number,
  }
  static defaultProps = {
    count: 0,
  }
  render() {
    return (
      <View style={{ ...this.props.style }}>
        <Badge
          value={this.props.count}
          textStyle={styles.badgeText}
          containerStyle={styles.badge}
        />
      </View>
    );
  }
}

export default CustomBadge;
