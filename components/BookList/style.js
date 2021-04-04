/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 10,
  },
  touch: {
    // borderColor: "red",
    // borderWidth: 5,
    width: '50%',
  },
  bookName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    width: '100%',
    height: Dimensions.get('window').height / 2 + 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
});
export default styles;
