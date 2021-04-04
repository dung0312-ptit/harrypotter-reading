/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  BookContainer: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
    // borderColor: "green",
    // borderWidth: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
export default styles;
