import React from 'react';
import { ScrollView, View } from 'react-native';

import Item from './Item';

import styles from '../styles/components/items-list';


class ItemsList extends React.Component {
  state = {
    scrollable: true,
    scrolling: false,
  }

  render() {
    const { scrollable, scrolling } = this.state;
    const { items, onPressIncrease, onPressReset, onPressDelete } = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.itemsList}
        scrollEnabled={scrollable}
        onScrollBeginDrag={() => this.setState({ scrolling: true })}
        onScrollEndDrag={() => this.setState({ scrolling: false })}>
        {Object.keys(items).map((itemKey) => (
          <Item
            parentScrolling={scrolling}
            onSwipeStart={() => this.setState({ scrollable: false })}
            onSwipeRelease={() => this.setState({ scrollable: true })}
            key={itemKey}
            id={itemKey}
            item={items[itemKey]}
            onPressIncrease={onPressIncrease}
            onPressReset={() => onPressReset(itemKey)}
            onPressDelete={() => onPressDelete(itemKey)} />
        ))}
      </ScrollView>
    );
  }
}


export default ItemsList;
