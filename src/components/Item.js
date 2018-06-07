import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/components/item';

const countMinFontSize = 50;
const countMaxFontSize = 150;


class Item extends React.Component {
  render() {
    const { item, id, onPressIncrease } = this.props;
    const { count, label } = item;
    const countFontSize = count <= countMaxFontSize ? (count >= countMinFontSize ? count : countMinFontSize) : countMaxFontSize;
    return (
      <View style={styles.item}>
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
    );
  }
}


export default Item;
