import { StyleSheet } from 'react-native';

import vars from '../vars';


export default StyleSheet.create({
  item: {
    marginBottom: 25,
  },
  count: {
    flex: 1,
    color: vars.colors.white,
    textAlign: 'right',
    fontFamily: 'Avenir-Heavy',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    color: vars.colors.white,
  },
});
