import React from 'react';
import { View, Text } from 'react-native';
import autobind from 'autobind-decorator';
import v4 from 'uuid/v4';
import omit from 'lodash/omit';

import ItemsList from '../components/ItemsList';
import AddItem from '../components/AddItem';

import styles from '../styles/routes/main';


class Main extends React.Component {
  // NOTE: migrate this to local storage eventually
  state = {
    items: {
      1: {
        label: 'EXAMPLE',
        count: 0,
      },
    },
  }

  render() {
    const { items } = this.state;
    return (
      <View style={styles.main}>
        <AddItem onPressAddItem={this._handleAddItem} />
        <View style={styles.items}>
          <ItemsList
            items={items}
            onPressIncrease={this._handleIncreaseCount}
            onPressReset={this._handleResetItem}
            onPressDelete={this._handleDeleteItem} />
        </View>
      </View>
    );
  }

  @autobind
  _handleIncreaseCount(id) {
    const { items } = this.state;
    this.setState({
      items: {
        ...items,
        [id]: {
          ...items[id],
          count: items[id].count + 1,
        },
      },
    });
  }

  @autobind
  _handleResetItem(id) {
    const { items } = this.state;
    this.setState({
      items: {
        ...items,
        [id]: {
          ...items[id],
          count: 0,
        },
      },
    });
  }

  @autobind
  _handleAddItem(label) {
    const { items } = this.state;
    this.setState({
      items: {
        ...items,
        [v4()]: {
          label,
          count: 0,
        },
      },
    });
  }

  @autobind
  _handleDeleteItem(id) {
    const { items } = this.state;
    this.setState({ items: omit(items, [id]) });
  }
}


export default Main;
