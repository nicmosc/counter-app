import React from 'react';
import { View, Text } from 'react-native';
import autobind from 'autobind-decorator';

import ItemsList from '../components/ItemsList';

import styles from '../styles/routes/main';


class Main extends React.Component {
  // NOTE: migrate this to local storage eventually
  state = {
    items: {
      1: {
        label: 'BURGERS',
        count: 1,
      },
      2: {
        label: 'POOPS',
        count: 1,
      },
    },
  }

  render() {
    const { items } = this.state;
    return (
      <View style={styles.main}>
        <View style={styles.items}>
          <ItemsList items={items} onPressIncrease={this._handleIncreaseCount} />
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
}


export default Main;
