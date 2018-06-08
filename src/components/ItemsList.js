import React from 'react';
import { ScrollView, View } from 'react-native';

import Item from './Item';

import styles from '../styles/components/items-list';


class ItemsList extends React.Component {
  render() {
    const { items, onPressIncrease } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.itemsList}>
        {Object.keys(items).map((itemKey) => (
          <Item
            key={itemKey}
            id={itemKey}
            item={items[itemKey]}
            onPressIncrease={onPressIncrease} />
        ))}
      </ScrollView>
    );
  }
}


export default ItemsList;
