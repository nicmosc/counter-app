import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/components/placeholder';


const Placeholder = () => {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.label}>Press + to add a counter</Text>
    </View>
  );
}


export default Placeholder;
