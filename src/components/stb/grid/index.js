import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
import * as _ from 'lodash';


const styles = {

  container: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    width: View.width,
    height: 120,
    resizeMode: 'cover',
  },

  flexCol: {
    flexDirection: 'column',
    flex: 1,
  },
  alignCenter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 20,
    paddingRight: 5,
  },

  photoView: {
    height: 120,
    flex: 2,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
  },
  expandedView: {
    height: 249,
    backgroundColor: 'gray',
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 2,
  },
  expandedImage: {
    height: 249,
  },

};

class PhotoGrid extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    customOverlay: PropTypes.func,
    customModalContent: PropTypes.func,
    borderRadius: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      photoUrl: '',
      activeItem: {},
    };
  }

  photoPopupToggle(item) {
    const photoUrl = (item) ? item.url : '';
    this.setState({ modalVisible: !this.state.modalVisible, photoUrl, activeItem: item });
  }

  renderChunk() {
    const chunk = _.chunk(this.props.items, 3);
    return chunk.map(
        (chunkItem) => {
          const row = _.chunk(chunkItem, 3);
          return row.map(
                (rowItem) => {
                  return this.renderPhotoRow(rowItem);
                }
            );
        }
    );
  }
  renderPhotoRow(rowItem) {
    return this.renderPhotoRow1(rowItem);
  }

  renderCustomOverlay = (item) => {
    if (this.props.customOverlay) {
      return this.props.customOverlay(item);
    }
    return <View />;
  }
  renderItem =(item, index) => {
    return (
      <View key={index} style={[styles.photoView, { borderRadius: this.props.borderRadius }]}>
        <TouchableOpacity onPress={() => { this.photoPopupToggle(item); }}>
          <View style={{ zIndex: 10 }}>{this.renderCustomOverlay(item)}</View>
          <Image source={{ uri: item.url }} style={[styles.ImageStyle, { borderRadius: this.props.borderRadius }]} />
        </TouchableOpacity>
      </View>
    );
  }
  renderBlankItem = (index) => {
    return (
      <View key={index} style={[styles.photoView, { backgroundColor: 'transparent' }]} />
    );
  }
  renderPhotoRow1(row) {
    if (row.length === 1) {
      return (
        <View key={1} style={styles.alignCenter}>
          { this.renderItem(row[0], 0) }
          { this.renderBlankItem(1) }
          { this.renderBlankItem(2) }
        </View>
      );
    } else if (row.length === 2) {
      return (
        <View key={1} style={styles.alignCenter}>
          { this.renderItem(row[0], 0) }
          { this.renderItem(row[1], 1) }
          { this.renderBlankItem(2) }
        </View>
      );
    }
    return (
      <View key={1} style={styles.alignCenter}>
        { this.renderItem(row[0], 0) }
        { this.renderItem(row[1], 1) }
        { this.renderItem(row[2], 2) }
      </View>
    );
  }
  renderGrid() {
    return (
      <View>
        {this.renderChunk()}
      </View>
    );
  }
  renderModalContent = () => {
    if (this.props.customModalContent) {
      return this.props.customModalContent(this.state.activeItem, this);
    }
    return (
      <TouchableOpacity onPress={() => { this.photoPopupToggle(); }}>
        <Image
          source={{ uri: this.state.photoUrl }}
          onPress={() => { this.photoPopupToggle(); }}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={[styles.container]}>
        {this.renderGrid()}
        <View >
          <Modal
            animationType={'fade'}
            transparent={false}
            onRequestClose={() => { }}
            visible={this.state.modalVisible}
          >
            {this.renderModalContent()}
          </Modal>
        </View>
      </View>
    );
  }
}

export default PhotoGrid;
