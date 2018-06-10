import React from 'react';
import { ScreenOrientation } from 'expo';

import Root from './routes/Root';


// only allow portrait up
Expo.ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT_UP);


class App extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}


export default App;
