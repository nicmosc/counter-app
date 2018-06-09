import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import autobind from 'autobind-decorator';
import v4 from 'uuid/v4';
import omit from 'lodash/omit';
import { AppLoading } from 'expo';

import ItemsList from '../components/ItemsList';
import AddItem from '../components/AddItem';
import Placeholder from '../components/Placeholder';

import styles from '../styles/routes/main';


class Main extends React.Component {
  state = {
    items: {},
    ready: false,
  }

  render() {
    const { items, ready } = this.state;
    if (! ready) {
      return (
        <AppLoading
          startAsync={this._loadLocalItems}
          onFinish={() => this.setState({ ready: true })}
          onError={console.warn} />
      );
    }
    return (
      <View style={styles.main}>
        <AddItem onPressAddItem={this._handleAddItem} />
        <View style={styles.items}>
          {do{
            if (Object.keys(items).length === 0) {
              <Placeholder />
            }
            else {
              <ItemsList
                items={items}
                onPressIncrease={this._handleIncreaseCount}
                onPressReset={this._handleResetItem}
                onPressDelete={this._handleDeleteItem}
                onPressUndo={this._handleUndo} />
            }
          }}
        </View>
      </View>
    );
  }

  @autobind
  async _loadLocalItems() {
    try {
      const storedItems = await AsyncStorage.getItem('@counter-store:items');
      if (storedItems) {
        this.setState({
          items: JSON.parse(storedItems),
          ready: true,
        });
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  @autobind
  async _handleIncreaseCount(id) {
    const { items } = this.state;
    await this.setState({
      items: {
        ...items,
        [id]: {
          ...items[id],
          count: items[id].count + 1,
        },
      },
    });
    this._saveToStorage();
  }

  @autobind
  async _handleResetItem(id) {
    const { items } = this.state;
    await this.setState({
      items: {
        ...items,
        [id]: {
          ...items[id],
          count: 0,
        },
      },
    });
    this._saveToStorage();
  }

  @autobind
  async _handleUndo(id) {
    const { items } = this.state;
    await this.setState({
      items: {
        ...items,
        [id]: {
          ...items[id],
          count: items[id].count > 0 ? items[id].count - 1 : items[id].count,
        },
      },
    });
    this._saveToStorage();
  }

  @autobind
  async _handleAddItem(label) {
    const { items } = this.state;
    await this.setState({
      items: {
        ...items,
        [v4()]: {
          label,
          count: 0,
        },
      },
    });
    this._saveToStorage();
  }

  @autobind
  async _handleDeleteItem(id) {
    const { items } = this.state;
    await this.setState({ items: omit(items, [id]) });
    this._saveToStorage();
  }

  @autobind
  async _saveToStorage() {
    const { items } = this.state;
    try {
      await AsyncStorage.setItem('@counter-store:items', JSON.stringify(items));
    }
    catch (error) {
      console.log("Error saving data" + error);
    }
  }
}


export default Main;
