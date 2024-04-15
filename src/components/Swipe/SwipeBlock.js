import React from 'react';
import HTMLView from 'react-native-htmlview';

import { ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';

import { Text, View, Button, Icon, UUID } from '../stb/index';
import SwipeAudioIcon from './SwipeAudioIcon';
import SwipeBodyImage from './SwipeBodyImage';
import SwipeBodyText from './SwipeBodyText';

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'p') {
    const specialSyle = node.attribs.style;
    return <Text key={index}>{defaultRenderer(node.children, parent)}</Text>;
  } else if (node.name == 'a') {
    const specialSyle = node.attribs.style;
    return (
      <Link link={node.attribs.href} key={index}>
        {defaultRenderer(node.children, parent)}
      </Link>
    );
  } else if (node.name == 'b') {
    const specialSyle = node.attribs.style;
    return (
      <Text bold key={index}>
        {defaultRenderer(node.children, parent)}
      </Text>
    );
  }
}
class SwipeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.refsArray = [];
    this.currentRef = '';
  }
  generateRef = () => {
    let ref = UUID.generate();
    this.currentRef = ref;
    this.refsArray.push(ref);
    return ref;
  };
  stopAudio = soundObject => {
    _.each(this.refsArray, ref => {
      this.refs[ref]?.stopAudio();
    });
  };
  onImagePress = ref => {
    if (this.props.data.sound.source) {
      this.refs[ref].toggleAudio();
    }
  };
  generateImage = () => {
    if (this.props.data.sound.source) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.onImagePress(this.currentRef);
          }}
        >
          <SwipeBodyImage image={this.props.data.image.source} />
        </TouchableOpacity>
      );
    }
    return <SwipeBodyImage image={this.props.data.image.source} />;
  };
  render() {
    return (
      <ScrollView>
        <View flex padding>
          <SwipeAudioIcon
            data={this.props.data.sound}
            ref={this.generateRef()}
          />
          {this.generateImage()}

          <SwipeBodyText style={{ marginTop: 7 }}>
            <HTMLView value={this.props.data.text} renderNode={renderNode} />
          </SwipeBodyText>
        </View>
      </ScrollView>
    );
  }
}

export default SwipeBlock;
