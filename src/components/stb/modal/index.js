import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-native-modal';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

import Button from '../buttons/normal';
import Icon from '../icon';
import Theme from '../ThemeSettings';

const MODAL_TYPES = {
  BOTTOM: 'bottom',
  FANCY: 'fancy',
  LEFT: 'left',
  RIGHT: 'right',
  DEFAULT: 'default'
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 20
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  }
});

class CustomModal extends React.Component {
  static propTypes = {
    modalType: PropTypes.string,
    children: PropTypes.any,
    hasPadding: PropTypes.bool,
    onClose: PropTypes.func,
    alert: PropTypes.bool
  };
  static defaultProps = {
    modalType: MODAL_TYPES.RIGHT,
    hasPadding: true,
    onClose: null,
    alert: false
  };
  renderBottomModal() {
    return (
      <Modal
        onBackdropPress={this.props.onClose}
        {...this.props}
        style={styles.bottomModal}
      >
        {this.renderModalContent()}
      </Modal>
    );
  }
  renderLeftModal = () => {
    return (
      <Modal
        {...this.props}
        onBackdropPress={this.props.onClose}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
      >
        {this.renderModalContent()}
      </Modal>
    );
  };
  renderRightModal = () => {
    return (
      <Modal
        {...this.props}
        onBackdropPress={this.props.onClose}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
      >
        {this.renderModalContent()}
      </Modal>
    );
  };
  renderDefaultModal = () => {
    return (
      <Modal onBackdropPress={this.props.onClose} {...this.props}>
        {this.renderModalContent()}
      </Modal>
    );
  };
  renderFancyModal() {
    return (
      <Modal
        {...this.props}
        onBackdropPress={this.props.onClose}
        backdropColor={'black'}
        backdropOpacity={0.6}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
      >
        {this.renderModalContent()}
      </Modal>
    );
  }

  alertModal() {
    return (
      <Modal onBackdropPress={this.props.onClose} {...this.props}>
        {this.renderModalContent()}
      </Modal>
    );
  }

  getPadding = () => {
    return {
      padding: this.props.hasPadding ? 15 : 0
    };
  };
  renderCloseButton = () => {
    return <View />;
    if (!this.props.onClose) {
      return <View />;
    }

    // if (this.props.alert) {
    //   return (
    //     <Button title="Ok" onPress={this.props.onClose} />
    //   );
    // }
    return (
      <View style={styles.closeButton}>
        <Icon
          name="times"
          type="font-awesome"
          raised
          color={Theme.colorSettings.core.danger}
          onPress={this.props.onClose}
        />
      </View>
    );
  };
  isAlert = () => {
    if (!this.props.alert) {
      return { flex: 1 };
    }

    return {};
  };
  renderModalContent = () => {
    return (
      <View style={this.isAlert()} onPress={() => {}}>
        <ScrollView style={[styles.modalContent, this.getPadding()]}>
          {this.props.children}
          {this.renderCloseButton()}
        </ScrollView>
      </View>
    );
  };
  renderModal = () => {
    switch (this.props.modalType) {
      case MODAL_TYPES.BOTTOM:
        return this.renderBottomModal();
      case MODAL_TYPES.FANCY:
        return this.renderFancyModal();
      case MODAL_TYPES.LEFT:
        return this.renderLeftModal();
      case MODAL_TYPES.RIGHT:
        return this.renderRightModal();
      default:
        return this.renderDefaultModal();
    }
  };
  render() {
    return <View style={styles.container}>{this.renderModal()}</View>;
  }
}

export default CustomModal;
