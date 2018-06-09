import { StyleSheet } from 'react-native';

import { shadeColor } from '../../utils/styles';
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
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  resetButton: {
    backgroundColor: vars.colors.orange,
  },
  undoButton: {
    backgroundColor: vars.colors.grey,
  },
  buttonLabel: {
    color: vars.colors.white,
    marginLeft: 12,
    textAlign: 'center',
  },
});
