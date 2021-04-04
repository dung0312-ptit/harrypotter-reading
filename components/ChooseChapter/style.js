/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  bookInfor: {
    flex: 5,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discription: {
    flex: 2,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  chapter: {
    flex: 0.75,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFA07A',
    bottom: 50,
  },
  chapterButton: {
    width: '50%',
  },
  bookImage: {
    marginTop: 20,
    height: '100%',
    width: '70%',
  },
  buttonContainer: {
    height: 70,
    margin: 5,
  },
  choosechap: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    top: 5,
  },
  flatlist: {
    flex: 2,
    bottom: 5,
  },
});
export default styles;
