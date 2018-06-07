import React from 'react';
import { LinearGradient } from 'expo';

import FontsViewer from './FontsViewer';
import Main from './Main';

import styles from '../styles/routes/root';


class Root extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#25232F', '#191B29']} style={styles.root}>
        <Main />
      </LinearGradient>
    );
  }
}


export default Root;
