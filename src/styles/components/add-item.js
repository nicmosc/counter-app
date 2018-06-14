import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import vars from '../vars';


export default StyleSheet.create({
  addItem: {
    padding: 5,
    paddingLeft: 20,
    // position: 'absolute',
    // zIndex: 2,
  },
  label: {
    color: vars.colors.grey,
    fontSize: 40,
    fontFamily: vars.defaultFont,
  },
  modal: {
    paddingRight: 50,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: vars.colors.white,
    fontFamily: vars.defaultFont,
  },
});
