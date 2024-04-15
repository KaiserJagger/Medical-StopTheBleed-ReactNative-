import React from 'react';
import { View } from '../stb/index';

const SwipeBodyText = props => {
  return (
    <View {...props} style={{ padding: 15 }}>
      {props.children}
    </View>
  );
};

export default SwipeBodyText;
