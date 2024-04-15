import React from 'react';
import { View } from 'react-native';

const styles =
  {
    padding: 0,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    marginHorizontal: 0,
  };

const Card = props => (
  <View style={styles}>
    {props.children}
  </View>
);

export default Card;
