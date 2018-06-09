import React from 'react';
import { View, Text, TouchableHighlight, Animated, Dimensions, Easing } from 'react-native';
import Swipeable from 'react-native-swipeable';
import autobind from 'autobind-decorator';

import { shadeColor } from '../utils/styles';
import vars from '../styles/vars';

import styles from '../styles/components/item';


const countMinFontSize = 50;
const countMaxFontSize = 130;


const DeleteButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[ styles.button, styles.deleteButton ]}
      underlayColor={shadeColor(vars.colors.red, -0.3)}>
      <Text style={styles.buttonLabel}>Remove</Text>
    </TouchableHighlight>
  );
}


const ResetButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[ styles.button, styles.resetButton ]}
      underlayColor={shadeColor(vars.colors.orange, -0.3)}>
      <Text style={styles.buttonLabel}>Reset</Text>
    </TouchableHighlight>
  );
}


const UndoButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[ styles.button, styles.undoButton ]}
      underlayColor={shadeColor(vars.colors.grey, -0.3)}>
      <Text style={styles.buttonLabel}>Undo</Text>
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
    const { label, count } = item;
    const range = countMaxFontSize - countMinFontSize;
    const countFontSize = (((count - 0) * range) / 1000) + countMinFontSize;
    return (
        <View style={styles.item}>
          <Swipeable
            onRef={(ref) => this.swipeable = ref}
            rightButtons={[
              <UndoButton onPress={this._handlePressUndo} />,
              <ResetButton onPress={this._handlePressReset} />,
              <DeleteButton onPress={onPressDelete} />
            ]}
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

  @autobind
  _handlePressUndo(id) {
    const { onPressUndo } = this.props;
    this.swipeable.recenter();
    onPressUndo(id);
  }
}


export default Item;
