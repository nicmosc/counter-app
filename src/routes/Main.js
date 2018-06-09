import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import autobind from 'autobind-decorator';
import v4 from 'uuid/v4';
import omit from 'lodash/omit';

import ItemsList from '../components/ItemsList';
import AddItem from '../components/AddItem';
import Placeholder from '../components/Placeholder';

import styles from '../styles/routes/main';


class Main extends React.Component {
  state = {
    items: {},
  }

  async componentDidMount() {
    try {
      const storedItems = await AsyncStorage.getItem('@counter-store:items');
      if (storedItems) {
        this.setState({
          items: JSON.parse(storedItems),
        });
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  render() {
    const { items } = this.state;
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
                onPressDelete={this._handleDeleteItem} />
            }
          }}
        </View>
      </View>
    );
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
