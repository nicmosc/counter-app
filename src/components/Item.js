import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';
import autobind from 'autobind-decorator';

import { lightenColor } from '../utils/styles';
import vars from '../styles/vars';

import styles from '../styles/components/item';


const countMinFontSize = 50;
const countMaxFontSize = 150;


const DeleteButton = ({ onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.deleteButton}>
      <Text style={styles.buttonLabel}>Remove</Text>
    </TouchableHighlight>
  );
}


const ResetButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.resetButton}
      underlayColor={lightenColor(vars.colors.grey, 50)}>
      <Text style={styles.buttonLabel}>Reset</Text>
    </TouchableHighlight>
  );
}


class Item extends React.Component {
  componentDidUpdate(prevProps) {
    const { parentScrolling } = this.props;
    const { parentScrolling: prevParentScrolling } = prevProps;
    if (parentScrolling && ! prevParentScrolling) {
      this.swipeable.recenter();
    }
  }

  render() {
    const {
      item,
      id,
      onPressIncrease,
      onSwipeStart,
      onSwipeRelease,
      onPressDelete,
    } = this.props;
    const { count, label } = item;
    const countFontSize = count <= countMaxFontSize ? (count >= countMinFontSize ? count : countMinFontSize) : countMaxFontSize;
    return (
        <View style={styles.item}>
          <Swipeable
            onRef={(ref) => this.swipeable = ref}
            rightButtons={[
              <ResetButton onPress={this._handlePressReset} />,
              <DeleteButton onPress={onPressDelete} />
            ]}
            rightActionActivationDistance={200}
            onRightActionActivate={() => this.setState({ leftActionActivated: true })}
            onRightActionDeactivate={() => this.setState({ leftActionActivated: false })}
            // onRightActionComplete={}
            rightButtonContainerStyle={styles.buttonContainer}
            onSwipeStart={onSwipeStart}
            onSwipeRelease={onSwipeRelease}
            style={styles.swipeable}>
            <View style={styles.content}>
              <Text
                style={[
                  styles.count,
                  {
                    fontSize: countFontSize,
                    marginTop: -countFontSize * 0.25,
                    marginBottom: -countFontSize * 0.35,
                  },
                ]}
                onPress={() => onPressIncrease(id)}
                numberOfLines={1}
                ellipsizeMode="clip">{count}</Text>
              <View style={styles.footer}>
                <Text style={styles.label}>
                  {label}
                </Text>
              </View>
            </View>
          </Swipeable>
        </View>
    );
  }

  @autobind
  _handlePressReset(id) {
    const { onPressReset } = this.props;
    this.swipeable.recenter();
    onPressReset(id);
  }
}


export default Item;
