import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { BlurView } from 'expo';
import autobind from 'autobind-decorator';

import styles from '../styles/components/add-item';


const baseFontSize = 50;


class AddItem extends React.Component {
  state = {
    modalOpen: false,
    label: '',
    fontSizeDecreasePercentage: 1,
    fontSize: baseFontSize,
  }

  render() {
    const { modalOpen, label, fontSize } = this.state;
    return (
      <View style={styles.addItem}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalOpen}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <BlurView intensity={100} tint="dark" style={StyleSheet.absoluteFill}>
            <KeyboardAvoidingView style={styles.modal} behavior="padding" enabled>
              <TextInput
                value={label}
                style={[ styles.input, { fontSize }]}
                onChangeText={this._handleOnChangeText}
                autoFocus={true}
                maxLength={25}
                autoCapitalize="characters"
                autoCorrect={false}
                onContentSizeChange={this._handleContentSizeChange}
                onSubmitEditing={this._handlePressEnter}/>
            </KeyboardAvoidingView>
          </BlurView>
        </Modal>
        <TouchableOpacity
         style={styles.button}
         onPress={() => this.setState({ modalOpen: true })}>
         <Text style={styles.label}>+</Text>
       </TouchableOpacity>
      </View>
    );
  }

  @autobind
  _handleOnChangeText(text) {
    if (text.length > 1) {
      this.setState({ fontSize: baseFontSize - (text.length * 1.3) });
    }
    else {
      this.setState({ fontSize: baseFontSize });
    }
    this.setState({ label: text });
  }

  @autobind
  _handlePressEnter() {
    const { label } = this.state;
    const { onPressAddItem } = this.props;
    if (label !== '') {
      onPressAddItem(label);
    }
    this.setState({ modalOpen: false, label: '' });
  }
}


export default AddItem;
