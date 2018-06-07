import React from 'react';
import { ScrollView } from 'react-native';

import Item from './Item';
// import AddItem from './AddItem';


class ItemsList extends React.Component {
  render() {
    const { items, onPressIncrease } = this.props;
    return (
      <ScrollView>
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
