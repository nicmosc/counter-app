import { StyleSheet } from 'react-native';

import vars from '../vars';


export default StyleSheet.create({
  placeholder: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    color: vars.colors.grey,
    opacity: 0.5,
    fontSize: 25,
    fontFamily: vars.defaultFont,
  },
});
