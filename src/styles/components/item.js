import { StyleSheet } from 'react-native';

import vars from '../vars';


export default StyleSheet.create({
  item: {
    marginBottom: 15,
    marginTop: 15,
  },
  content: {
    marginRight: 50,
  },
  count: {
    flex: 1,
    color: vars.colors.white,
    textAlign: 'right',
    fontFamily: vars.defaultFont,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  label: {
    fontFamily: vars.defaultFont,
    color: vars.colors.lightGrey,
  },
  buttonContainer: {
  },
  deleteButton: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: vars.colors.grey,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLabel: {
    color: vars.colors.white,
    marginLeft: 10,
    textAlign: 'center',
  },
});
